import * as fs from 'fs';

const width:number = 400;
const ratio:number = 16.0 / 9.0;
const height:number = (width / ratio)

// 랜더링 해주는 함수
const present = (width:number, ratio:number):number[] => {
  let output:number[] = [];
  let aspect_ratio = ratio
  let image_width = width
  let image_height = image_width / aspect_ratio

  for(let j=0; j<image_height; j++) {
    for(let i=0; i<image_width; i++) {
      let u = i / (image_width - 1);
      let v = j / (image_height -1);
      output.push(parseInt(String(u * 255.999)));
      output.push(parseInt(String(v * 255.999)));
      output.push(parseInt(String(0.25 * 255.999)))
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

}
const output = present(width, ratio)
writeRGB(output)
