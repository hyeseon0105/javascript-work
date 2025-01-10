let fs = require('fs')
let input = fs.readFileSync('./data/문제3_시험성적.txt')
.toString().split('\n');
input =input[0].split(' ').map(Number)
console.log(input)
let result;
if(input >=90){
  result = 'A';
}else if(input>=80){
  result = 'B';
}else if(input>=70){
  result = 'D';
}else result ="f"
console.log(result)

// const a = Number(input[0]);

// if(a>89){
//   console.log("A");
// }else if (a > 79) {
//   console.log("B");
// }else if (a > 69) {
//   console.log("C");
// }else if (a > 59) {
//   console.log("D");
// }else{
//   console.log("F");
// }


