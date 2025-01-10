let fs = require('fs')
let input = fs.readFileSync('./data/문제7_평균조작.txt')
.toString().split('\n');
console.log(input);

const N = parseInt(input[0]);

// 현재 성적 배열
const scores = input[1].split(" ").map(Number);

// 최대 점수 M
const maxScore = Math.max(...scores);

// 조작된 점수 배열
const manipulatedScores = scores.map(score => (score / maxScore) * 100);

// 새로운 평균
const newAverage = manipulatedScores.reduce((sum, score) => sum + score, 0) / N;

console.log(newAverage.toFixed(6)); // 소수점 6자리까지 출력