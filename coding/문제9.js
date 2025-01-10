let fs = require('fs')
let input = fs.readFileSync('./data/문제9_상수.txt')
.toString().split('\n');
console.log(input);


let [A,B] = input[0].split(' ');


// 숫자를 뒤집는 함수
function reverseNumber(num) {
  return parseInt(num.split("").reverse().join(""), 10);
}

// 두 숫자를 뒤집음
let reversedA = reverseNumber(A);
let reversedB = reverseNumber(B);

// 큰 수 출력
console.log(Math.max(reversedA, reversedB));