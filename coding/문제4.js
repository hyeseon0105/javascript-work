let fs = require('fs')
let input = fs.readFileSync('./data/문제4_최대최소.txt')
.toString().split('\n');
num =parseInt(input[0])
data = input[1].split(' ').map(Number);

console.log(num);
console.log(data);
let min =999999999;
let max = 0;
for(let i=0; i<num; i++){
    // 가장 큰값
    if(max < data[i])
        max=data[i];
    
    if(min > data[i])
        min=data[i];
    
        // 가장 작은값
}
console.log(min + ' '+max)
// 리듀스 이용
min = data.reduce((x,y )=> Math.min(x,y));
max = data.reduce((x,y) => Math.max(x,y))
console.log(min + ' '+max)




// const N = parseInt(input[0]); // 첫 번째 줄에서 N값 가져오기
// const number = input[1].split(" ").map(Number); // 두 번째 줄에서 숫자 배열 만들기

// let min = Infinity; // 최소값 초기화
// let max = -Infinity; // 최대값 초기화

// // 최대/최소 찾기
// for (let i = 0; i < N; i++) {
//     if (number[i] < min) {
//         min = number[i];
//     }
//     if (number[i] > max) {
//         max = number[i];
//     }
// }

// console.log(`${min} ${max}`); // 결과 출력
