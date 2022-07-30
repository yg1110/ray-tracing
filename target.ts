import * as fs from 'fs';
import Vec3, {cross, dot, length, unit_vector} from './Vector';
import Ray, {getRayColor} from "./Ray";
import HitableList from "./HittableList";
import Sphere from "./Sphere";

const width:number = 400;
const ratio:number = 16.0 / 9.0;;
const height:number = (width / ratio);

// 랜더링 해주는 함수
const present = (width:number, ratio:number, world:HitableList):number[] => {
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
      const r = new Ray(origin, direction);
      const rayColor = getRayColor(r, world);
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


const main = () => {
  const world = new HitableList();
  world.add(new Sphere(new Vec3(0.0, 0.0, -1.0)))
  world.add(new Sphere(new Vec3(0.0, -100.5, -1.0)));
  const output = present(width, ratio, world)
  writeRGB(output)
}

main();