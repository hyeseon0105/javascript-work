let fs = require('fs')
let input = fs.readFileSync('./data/문제1_A+B.txt')
.toString().split('\n');
console.log(input);
input = input[0].split(' ').map(Number);
console.log(input);

// let data2 = input[1].split(' ').map(Number);
// console.log(data2);

console.log(input[0]+input[1]);
let sum = 0;
for(let i=0; i<input.length; i++){
  sum = sum+ input[i];
}
console.log(sum);
console.log(input.reduce((x,y)=> x+y))

