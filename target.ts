import * as fs from 'fs';

const width:number = 400;
const ratio:number = 16.0 / 9.0;
const height:number = (width / ratio)

// 랜더링 해주는 함수
const present = (width:number, height:number):string => {
  let output:string = '';
  for(let i=1; i<=width*height; i++) {
    const rgb = [255, 0, 0];
    if(i === width*height) output += rgb.join(' ');
    else output += rgb.join(' ') + '\n'
  }
  return output;
}

const ppm_header = (width:number, height:number):string => {
  return `P3\n${width} ${height}\n255\n`
}

const header = ppm_header(width, height);
const output = present(width, height)

const filename:string = 'output.ppm';
fs.writeFile(filename, header, 'utf8', function(error){
  if(error) throw error
	console.log('write end')
});

fs.writeFile(filename, output, { flag: 'a+' }, err => {
  if (err) {
    console.error(err)
    return
  }
})