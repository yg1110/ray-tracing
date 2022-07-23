import * as fs from 'fs';
import Vec3, {cross, dot, length, unit_vector} from './Vector';
import Ray from "./Ray";

const width:number = 400;
const ratio:number = 16.0 / 9.0;;
const height:number = (width / ratio);

const hit_sphere = (r:Ray, sphere:Vec3, radius:number) => {
  // p : sphere
  // o : r.getOrigin
  // d : r.getDirection

  const DO = dot(r.getDirection(), r.getOrigin())
  const PD = dot(sphere, r.getDirection());
  const DD = dot(r.getDirection(), r.getDirection());
  const OP = dot(r.getOrigin(), sphere);
  const OO = dot(r.getOrigin(), r.getOrigin());
  const PP = dot(sphere, sphere);
  const a = DD;
  const b = 2 * DO - 2 * PD;
  const c = -2 * OP + OO + PP - radius * radius
  return b * b - 4.0 * a * c
}

// 랜더링 해주는 함수
const present = (width:number, ratio:number):number[] => {
  const output:number[] = [];
  const aspect_ratio = ratio;
  const image_width = width;
  const image_height = image_width / aspect_ratio;

  const viewportHeight = 2.0;
  const viportWidth = aspect_ratio * viewportHeight;
  const focalLength = 1.0;

  const origin = new Vec3(0.0, 0.0, 0.0);
  const horizontal = new Vec3(viportWidth, 0.0, 0.0);
  const vertical = new Vec3(0.0, viewportHeight, 0.0);
  const focal = new Vec3(0.0, 0.0, focalLength);

  const lowerLeftConer:Vec3 = origin.sub(horizontal.div(2.0)).sub(vertical.div(2.0)).sub(focal)
  for(let j=0; j<image_height; j++) {
    for(let i=0; i<image_width; i++) {
      const u = i / (image_width - 1);
      const v = j / (image_height -1);
      const direction = lowerLeftConer.add(horizontal.mul(u)).add(vertical.mul(v)).sub(origin)
      let rayColor = new Vec3(0.0, 0.0, 0.0);
      let sphere = new Vec3(0.0, 0.0, -2.0);
      const r = new Ray(origin, direction);
      let t = hit_sphere(r, sphere, 1.0);
      if(t >= 0) {
        const P = r.at(t);
        const V = unit_vector(P).sub(sphere);
        rayColor = new Vec3(
            (V.getX() + 1.0)  * 0.5,
            (V.getY() + 1.0)  * 0.5,
            (V.getZ() + 1.0)  * 0.5
        );
      } else {
        rayColor = r.getRayColor();
      }
      output.push(Math.floor(rayColor.getX() * 255.999));
      output.push(Math.floor(rayColor.getY() * 255.999));
      output.push(Math.floor(rayColor.getZ() * 255.999));
    }
  }
  return output;
}

const ppm_header = (width:number, height:number):string => {
  return `P3\n${width} ${height}\n255\n`
}

const writeRGB = (output:number[]) => {
  let rgb = '';

  const filename:string = 'output.ppm';
  const header = ppm_header(width, height);

  fs.writeFileSync(filename, header, 'utf-8')

  for(let i=1; i<=output.length; i++) {
    if(i%3 === 0) {
      if(i === output.length) {
        rgb += output[i-1];
      }
      else {
        rgb += output[i-1] + '\n'
      }
      fs.appendFileSync(filename, rgb, 'utf-8')
      rgb = ''
    }
    else {
      rgb += output[i-1] + ' '
    }
  }
  console.log('File Write End')
}
const output = present(width, ratio)
writeRGB(output)
