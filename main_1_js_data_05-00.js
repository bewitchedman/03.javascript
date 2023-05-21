// JS Data
// 05.객체 ~ 09.얕은 복사와 깊은 복사


///////////* 객체 *///////////
///////////* 구조 분해 할당 *///////////
///////////* 전개 연산자 *///////////
///////////* 불변성 *///////////
///////////* 얕은 복사와 깊은 복사 *///////////



///////////* 객체(Object) *///////////
// 정적 static method

// 추가
const userAge = {
  // key: value
  name: 'Eddie',
  age: 30
}
const userEmail = {
  name: 'Eddie',
  email: 'bewitchedman@naver.com'
}

// 합병
const target = Object.assign(userAge, userEmail)
console.log(target)
console.log(userAge)
console.log(target === userAge)

const a = { k: 123 }
const b = { k: 123 }
console.log(a === b)

// {name: 'Eddie', age: 30, email: 'bewitchedman@naver.com'}
// {name: 'Eddie', age: 30, email: 'bewitchedman@naver.com'}
// true
// false

// 신규 객체 생성
const target = Object.assign({}, userAge, userEmail)
console.log(target)
console.log(userAge)
console.log(target === userAge)

// {name: 'Eddie', age: 30, email: 'bewitchedman@naver.com'}
// {name: 'Eddie', age: 30}
// false
// false

const target = Object.assign({}, userAge)
console.log(target)
console.log(userAge)
console.log(target === userAge)

// {name: 'Eddie', age: 30}
// {name: 'Eddie', age: 30}
// false
// false




//keys

const user = {
  name: 'Eddie',
  age: 30,
  email: 'bewitchedman@naver.com'
}

const keys = Object.keys(user)
console.log(keys)
// ['name', 'age', 'email']

console.log(user['email'])

const values = keys.map(key => user[key])
console.log(values)


// (3) ['name', 'age', 'email']0: "name"1: "age"2: "email"length: 3[[Prototype]]: Array(0)
// bewitchedman@naver.com
// (3) ['Eddie', 30, 'bewitchedman@naver.com']

///////////* 구조 분해 할당 *///////////
// 비구조화 할당

const user = {
  name: 'eddie',
  age: 30,
  email: 'bewitchedman@naver.com',
  address: 'USA'
}

const { name = '무명', age, email, address } = user
//const { name: 무명, age, email, address = 'Korea' } = user
// E.g, user.address, address가 없는 경우, Korea로 따로 기본값 지정 가능.

console.log(`사용자의 이름은 ${name}입니다.`)
console.log(`${name}의 나이는 ${age}입니다.`)
console.log(`${name}의 이메일 주소는 ${email}입니다.`)
console.log(address)

const fruits = ['Apple', 'Banana', 'Cherry']
// const [a, b, c, d] = fruits
// console.log(a, b, c, d)
const [, , c] = fruits
console.log(c)

// 사용자의 이름은 eddie입니다.
// main.js:15 eddie의 나이는 30입니다.
// main.js:16 eddie의 이메일 주소는 bewitchedman@naver.com입니다.
// main.js:17 USA
// main.js:23 Cherry







///////////* 전개 연산자 *///////////

// 전개 연산자 (Spread) ...

const fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits)
console.log(...fruits)
// console.log('Apple', 'Banana', 'Cherry') = (...fruits)

function toObject(a, b, c) {
  return {
    a: a,
    b: b,
    c: c
  }
}
console.log(toObject(...fruits))
// console.log(toObject(fruits[0], fruits[1], fruits[2]))

// rest parameter : ...c
// 네번째 인자가 추가되었을 때
const fruitss = ['Apple', 'Banana', 'Cherry', 'Orange']
function toObject(a, b, ...c) {
  return {
    a: a,
    b: b,
    c: c
  }
}
console.log(toObject(...fruitss))

// 속성과 변수의 이름이 같을 경우, 하나만 남길 수 있음
const fruitsss = ['Apple', 'Banana', 'Cherry', 'Orange']
function toObject(a, b, ...c) {
  return {
    a,
    b,
    c
  }
}
console.log(toObject(...fruitsss))

const fruit = ['Apple', 'Banana', 'Cherry', 'Orange']
const Object = (a, b, ...c) => ({ a, b, c })
console.log(...fruit)
console.log(Object(...fruit))


// (3) ['Apple', 'Banana', 'Cherry']
//   0: "Apple"
//   1: "Banana"
//   2: "Cherry"
//   length: 3
//   [[Prototype]]: Array(0)

// Apple Banana Cherry

// {a: 'Apple', b: 'Banana', c: Array(1)}
//   a: "Apple"
//   b: "Banana"
//   c: Array(1)
//     0: "Cherry"
//     length: 1
//     [[Prototype]]: Array(0)
//   [[Prototype]]: Object

// {a: 'Apple', b: 'Banana', c: Array(2)}

// {a: 'Apple', b: 'Banana', c: Array(2)}
// a: "Apple"
// b: "Banana"
// c: Array(2)
//   0: "Cherry"
//   1: "Orange"
//   length: 2
//   [[Prototype]]: Array(0)
// [[Prototype]]: Object

// Apple Banana Cherry Orange

// {a: 'Apple', b: 'Banana', c: Array(2)}
// a: "Apple"
// b: "Banana"
// c: Array(2)
//   0: "Cherry"
//   1: "Orange"
//   length: 2
//   [[Prototype]]: Array(0)
// [[Prototype]]: Object



///////////* 불변성 *///////////
// 데이터 불변성(Immutability)
// 원시 데이터(기본 데이터): String, Number, Boolean, undefined, null

// -----------------------------------------------------------
// |1:           |2:           |3:           |4:  
// -----------------------------------------------------------

let a = 1
let b = 4
console.log(a, b, a === b)
// 값이 다른 것보다는 바라보는 메모리 장소가 다르기 때문에 false
b = a // b가 첫번째 메모리 주소를 바라보게 됨
console.log(a, b, a === b)
a = 7 //세번째 메모리 주소에 7이 저장됨
console.log(a, b, a === b)
let c = 1 // 다시 첫번째 메모리 주소를 바라보게 만들어 b와 동일한 주소를 바라봄
console.log(b, c, b === c)

// 참조형 데이터(참조의 인수, 가변성): Obejct, Array, Function
// -----------------------------------------------------------
// |1: {           } |2: {           } |3: {           } 
// -----------------------------------------------------------
et a = { k: 1 }
let b = { k: 1 }
console.log(a, b, a === b)
// 역시나 값이 같아도 바라보는 메모리 장소가 다르기 때문에 false
a.k = 7
b = a // a 변경 후, b와 동일하게 만들면 같은 곳을 참조하여 같아짐
console.log(a, b, a === b)
a.k = 2 // a와 b가 같기 때문에 a만 변경해도 다 변경
console.log(a, b, a === b)
let c = b // 이미 a와 같은 b와 동일하기 때문에 c도 동일
console.log(a, b, c, a === c)
a.k = 9 // a를 9로 변경하면 모두 변경
console.log(a, b, c, a === c)

// {k: 1} {k: 1} false
// {k: 7} {k: 7} true
// {k: 2} {k: 2} true
// {k: 2} {k: 2} {k: 2} true
// {k: 9} {k: 9} {k: 9} true




///////////* 얕은 복사(Shallow copy) ///
/// 깊은 복사(Deep copy) *//////////////

///// 깊은 복사(Deep copy)
const user = {
  name: 'Eddie',
  age: 30,
  emails: ['bewitchedman@naver.com']
}

const copyUser = user
console.log(copyUser === user)

user.age = 22
console.log('user', user) // 기존 나이 변경
console.log('copyUser', copyUser)
// user 나이만 변경하려고 했는데 의도치 않게 
// copyUser까지 변경됨
// 메모리 장소가 동일하기 때문에 일어나는 문제
// 복사라는 개념을 사용해야 함

console.log('-----------------------------')

// true
// main.js:16 user {name: 'Eddie', age: 22, emails: Array(1)}
// main.js:17 copyUser {name: 'Eddie', age: 22, emails: Array(1)}
// main.js:23 -----------------------------



///// 얕은 복사(Shallow copy)

const user = {
  name: 'Eddie',
  age: 30,
  emails: ['bewitchedman@naver.com']
}

const copyUser = Object.assign({}, user) 
// Object.assign(대상객체, 출처객체)
// 출처 객체의 내용을 새롭게 대상 객체에 담아서
// Object.assign에 실행 후, 반환하여 출력
// user 메모리가 아니라 새로운 주소에 저장
console.log(copyUser === user)

user.age = 22
console.log('user', user) // 기존 나이 변경
console.log('copyUser', copyUser)
// user 나이만 변경하려고 했는데 의도치 않게 
// copyUser까지 변경됨
// 메모리 장소가 동일하기 때문에 일어나는 문제
// 복사라는 개념을 사용해야 함

console.log('-----------------------------')

// 결과에서 copyUser는 나이가 변경되지 않음을 확인할 수 있음
// false
// main.js:16 user {name: 'Eddie', age: 22, emails: Array(1)}
// main.js:17 copyUser {name: 'Eddie', age: 30, emails: Array(1)}
// main.js:23 -----------------------------




///// 얕은 복사(Shallow copy)
// 전개 연산자를 통한 복사
const copyUser = {...user} 
// 결과는 Object.assign과 동일



///// 깊은 복사
// 나이는 다르지만, email은 같은 메모리 주소 공유
user.emails.push('keast5204@naver.com')
console.log(user.emails === copyUser.emails)

// false
// user {name: 'Eddie', age: 22, emails: Array(1)}
//   age: 22
//   emails: Array(2)
//     0: "bewitchedman@naver.com"
//     1: "keast5204@naver.com"
//     length: 2
//     [[Prototype]]: Array(0)
//   name: "Eddie"
//   [[Prototype]]: Object
// copyUser {name: 'Eddie', age: 30, emails: Array(1)}
//   age: 30
//   emails: Array(2)
//     0: "bewitchedman@naver.com"
//     1: "keast5204@naver.com"
//     length: 2
//     [[Prototype]]: Array(0)
//   name: "Eddie"
//   [[Prototype]]: Object
// -----------------------------
// true





// lodash를 통한 깊은 복사
import _ from 'lodash'

const user = {
  name: 'Eddie',
  age: 30,
  emails: ['bewitchedman@naver.com']
}

const copyUser = _.cloneDeep(user)
console.log(copyUser === user)

user.age = 22
console.log('user', user)
console.log('copyUser', copyUser)

console.log('-----------------------------')


// 깊은 복사이기 때문에 push해도 user.email만 추가
user.emails.push('keast5204@naver.com')
console.log(user.emails === copyUser.emails)
console.log('user', user)
console.log('copyUser', copyUser)


// false
// user {name: 'Eddie', age: 22, emails: Array(1)}
// copyUser {name: 'Eddie', age: 30, emails: Array(1)}
// -----------------------------
// false
// user {name: 'Eddie', age: 22, emails: Array(2)}
//   age: 22
//   emails: (2) 
//     ['bewitchedman@naver.com', 'keast5204@naver.com']
//   name: "Eddie"
//   [[Prototype]]: Object
// 
// copyUser {name: 'Eddie', age: 30, emails: Array(1)}
//   age: 30
//   emails: ['bewitchedman@naver.com']
//   name: "Eddie"
//   [[Prototype]]: Object