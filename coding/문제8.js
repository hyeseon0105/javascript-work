let fs = require('fs')
let input = fs.readFileSync('./data/문제8_문자열반복.txt')
.toString().split('\n');
console.log(input);
const T = parseInt(input[0]); // 테스트 케이스 개수
let result = '';

for (let i = 1; i <= T; i++) {
  const [R, S] = input[i].split(' '); // 반복 횟수와 문자열 분리
  const repeatCount = parseInt(R);    // 반복 횟수를 숫자로 변환
  let newString = '';

  // 문자열의 각 문자를 반복
  for (let char of S) {
    newString += char.repeat(repeatCount);
  }
  result += newString + '\n'; // 새로운 문자열 결과에 추가
}

console.log(result.trim()); // 최종 결과 출력