// JS Data 
// 01.문자 ~ 04.배열(2)

// String: "", '', ``
// Number
// Boolean: true, false
// undefined
// null
// Array: []
// Object: {}


// String.prototype.indexOf()
// 찾을 수 있는 경우 (해당 숫자)
const result = 'Hello World!'.indexOf('World')
console.log(result)
// 찾을 수 없는 경우 (-1)
const resulty = 'Hello World!'.indexOf('Eddie')
console.log(resulty)





///////////* 문자 *///////////

const str = '0123'

console.log(str)
console.log(str.length)
console.log('01 23'.length)

const stri = 'Hello world!'
console.log(stri.indexOf('eddie') !== -1)
console.log(stri.slice(0, 3))
console.log(stri.slice(6, 11))
console.log(stri.replace('world', 'eddie'))
console.log(stri.replace(' world!', ''))

const strin = 'bewitchedman@naver.com'
// 정규표현식 (/.+(?=@)/)
console.log(strin.match(/.+(?=@)/)[0])
console.log(strin.match(/(@=?)+../)[0])

const string = '     Hello world!    '
console.log(string)
console.log(string.trim())




///////////* 숫자와 수학 */////////// 

const pi = 3.14159265358979
console.log('π: ', pi)

// toFixed = 문자열로 반환
const st = pi.toFixed(2)
console.log('.xx: ', st)
console.log('type: ', typeof st)

// 전역함수 parseInt, parseFloat
// 위 함수는 문자열을 정수나, 소수점 이하 유지 숫자로 변환
// 아래는 비슷한 전역함수
// setTimeout, setInterval, clearTimeout, clearInterval
const integer = parseInt(st)
const float = parseFloat(st)
console.log('int: ',integer)
console.log('flt: ', float)
console.log(typeof integer, typeof float)



// Math.abs() abs => absolute

// 절대값
console.log('abs: ', Math.abs(-12))
// 최소값
console.log('min: ', Math.min(2, 8))
// 최대값
console.log('max: ', Math.max(2, 8))
// 올림
console.log('ceil: ', Math.ceil(3.14))
// 내림
console.log('floor: ', Math.floor(3.14))
// 반올림
console.log('rounddown: ', Math.round(3.14))
console.log('roundup: ', Math.round(3.7))
// 랜덤, 난수
console.log('random: ', Math.random())

import random from "./getRandom"
const a = random()
console.log('random(int): ', random(a))








///////////* 배열 *///////////

const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

console.log(numbers[1])
console.log(fruits[2])


// .length

const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

console.log(numbers.length)
console.log(fruits.length)
console.log([1, 2].length)

console.log([].length)


// .concat()

const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

console.log(numbers.concat(fruits))
console.log(numbers)
console.log(fruits)


// .forEach()

const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

fruits.forEach(function (element, index, array) {
  console.log(element, index, array)
})

fruits.forEach(function (fruit, index, array) {
  console.log(fruit, index, array)
})
// array는 잘 사용하지 않음

fruits.forEach(function (fruit, i) {
  console.log(fruit, i)
})



// .map() 01

const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

const a = fruits.forEach(function (fruit, index) {
  console.log(`${fruit}-${index}`)
})
console.log(a)

const b = fruits.map(function (fruit, index) {
  return `${fruit}-${index}`
})
console.log(b)

// (3) ['Apple-0', 'Banana-1', 'Cherry-2']
// 0 : "Apple-0"
// 1 : "Banana-1"
// 2 : "Cherry-2"
// length : 3





// .map() 02

const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

const a = fruits.forEach(function (fruit, index) {
  console.log(`${fruit}-${index}`)
})
console.log(a)

const b = fruits.map(function (fruit, index) {
  return {
    id: index,
    name: fruit
  }
})
console.log(b)

// (3) [{…}, {…}, {…}]
// 0 : {id: 0, name: 'Apple'}
// 1 : {id: 1, name: 'Banana'}
// 2 : {id: 2, name: 'Cherry'}
// length : 3



// .map() 03 화살표 함수로 변환

const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

const a = fruits.forEach((fruit, index) => {
  console.log(`${fruit}-${index}`)
})
console.log(a)

const b = fruits.map((fruit, index) => ({
  id: index,
  name: fruit
}))
console.log(b)




// .filter() 01

const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

const a = numbers.map(number => {
  return number < 3
})
console.log(a)

const b = numbers.filter(number => {
  return number < 3
})
console.log(b)

// (4) [true, true, false, false]
// 0 : true
// 1 : true
// 2 : false
// 3 : false
// length : 4
// 
// (2) [1, 2]
// 0 : 1
// 1 : 2
// length : 2


// .filter() 02 화살표 함수로 변환

const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

const a = numbers.map(number => number < 3)
console.log(a)

const b = numbers.filter(number => number < 3)
console.log(b)

console.log(numbers)





// .find() .findIndex()

const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

// 정규표현식  /^B/
const a = fruits.find(fruit => {
  return /^B/.test(fruit)   
})
console.log(a)

const b = fruits.find(fruit => /^C/.test(fruit))
console.log(b)

const c = fruits.findIndex(fruit => /^C/.test(fruit))
console.log(c)


// Banana
// Cherry
// 2



// .includes()

const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

const a = numbers.includes(3)
console.log(a)

const b = fruits.includes('Eddie')
console.log(b)

// true
// false




// .push()  => 가장 뒤쪽에 데이터 추가
// .unshift()  => 가장 앞족에 데이터 추가
// 원본이 수정됨

const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

numbers.push(1)
console.log(numbers)

numbers.unshift(0)
console.log(numbers)

//(5) [1, 2, 3, 4, 1]
// 0 : 0
// 1 : 1
// 2 : 2
// 3 : 3
// 4 : 4
// 5 : 1
// length : 6
//
//(6) [0, 1, 2, 3, 4, 1]
// 0 : 0
// 1 : 1
// 2 : 2
// 3 : 3
// 4 : 4
// 5 : 1
// length : 6



// .reverse()
// 원본이 수정됨

const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

numbers.reverse()
fruits.reverse()

console.log(numbers)
console.log(fruits)

// (4) [4, 3, 2, 1]
// 0: 4
// 1: 3
// 2: 2
// 3: 1
// length: 4
// (3) ['Cherry', 'Banana', 'Apple']




// .splice()  => index 2 번째 삭제, 1개 삭제, 데이터 추가
// 원본이 수정됨

const numbers = [1, 2, 3, 4, 5, 6, 7]
const fruits = ['Apple', 'Banana', 'Cherry']

// 끼워넣기
numbers.splice(2, 0, 9)
console.log(numbers)

// 변경하기
numbers.splice(3, 1, 99)
console.log(numbers)

// 삭제하기
numbers.splice(7, 1)
console.log(numbers)


fruits.splice(2, 0, 'Orange')
console.log(fruits)

// (8) [1, 2, 9, 3, 4, 5, 6, 7]
// (8) [1, 2, 9, 99, 4, 5, 6, 7]
// (7) [1, 2, 9, 99, 4, 5, 6]
// (4) ['Apple', 'Banana', 'Orange', 'Cherry']