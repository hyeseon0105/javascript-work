let fs = require('fs')
let input = fs.readFileSync('./data/문제5_최대값인덱스.txt')
.toString().split('\n');
console.log(input);
let data =input.map(Number);
console.log(data);

let max =data.reduce((x,y) => Math.max(x,y));
console.log(max);
console.log(data.indexOf(max)+ 1)

// let number = input.map(Number).filter(num => !isNaN(num));

// let max = -Infinity;
// let maxIndex = -1;

// for(let i = 0; i<number.length; i++){
//   if(number[i]> max){
//     max = number[i];
//     maxIndex = i +1;
//   }
// }
// console.log(max);
// console.log(maxIndex);

