/**
 * number
 * String
 * Boolean
 * underfiend
 * null
 * stmbol
 * Object(Function, array, object) : 객체타입
 */
// number
const age = 20;
const pi = 3.141592;
console.log(typeof age)
console.log(typeof pi)

// String
const myTest = '코딩테스트'
console.log(myTest)

// escape character
const iveYujin = '아이브 \n \t 안유진'
console.log(iveYujin)

// template literal 백틱(`)
const groupName = '아이브'
let idolName = '장원영'
console.log(groupName+'장원영')
// 템블릿 리터럴 ...${변수명}
console.log(`우리의 주인공은 ${groupName} 
  그룹의 ${idolName}입니다.
   환영해주세요.`)