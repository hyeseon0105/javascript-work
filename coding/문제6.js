let fs = require('fs')
let input = fs.readFileSync('./data/문제6_평균.txt')
.toString().split('\n');
// 현재시료갯수
let n = parseInt(input[0]);
console.log('n = '+n)

for(let i =1; i <= n; i++){
  let data = input[i].split(' ').map(Number);
  let m =data[0];
  let sum = 0; 
  for(let j=0; j <m; j++){
    sum += data[j];
  }
  // 총점계산
  console.log(sum);
  // 평균계산
let avg = sum /m;
console.log(avg);
// 편균보다 큰 값의 수 저장변수
let cnt;
for(let k = 1; k < n; k++){
  if(data[k] > avg)cnt =cnt+1;
}
// 평균이상자 수의 비울
let rate =(cnt / n);
console.log(rate.toString);
}

// let c = parseInt(input[0]);
// let result = [];

// for(let i = 1 ; i <= c; i++) {
//   let data = input[i].split(" ").map(Number);

//   let N = data[0];
//   let scores = data.slice(1);
  
  
//   let sum = scores.reduce((acc, cur) => acc + cur, 0);
//   let average = sum/N;
//   let aboveAvergeCount = scores.filter(score => score > average).length;
//   let percentage = (aboveAvergeCount / N) * 100;
//   result.push(percentage.toFixed(3)+"%");
  
// }
// console.log(result.join('\n'))