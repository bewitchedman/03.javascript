/// 산술 연산자 (arithmetic operator)

console.log(1 + 2)
console.log(5 - 7)
console.log(3 * 4)
console.log(10 / 2)
console.log(7 % 5)


/// 할당 연산자 (assignment operator)
// const 재할당 불가, let 재할당 가능
// const a = 2

let a = 2
// a = a + 1
// +=, -=, *=, /=, %=
a += 1

console.log(a)


/// 비교 연산자 (comparison operator)

const a = 1
const b = 1

console.log(a === b)

function isEqula(x, y) {
  return x === y
}

console.log(isEqual(1, 1))
console.log(isEqual(2, '2'))

/////////////// !==, <, >, <=, >= ///////////////
console.log(a !== b)



/// 논리 연산자 (logical operator)

const a = 1 === 1
const b = 'AB' === 'AB'
const c = true

console.log(a)
console.log(b)
console.log(c)


console.log('&&: ' a && b && c) // && 는 and 연산자
console.log('||: ' a || b || c) // || 는 or 연산자
console.log('!: ', !a) // ! 는 not 연산자


/// 삼항 연산자(ternary operator)

const a = 1 < 2

if (a) {
  console.log('참')
} else {
  console.log('거짓')
}

//위 내용과 동일함
console.log(a ? '참' : '거짓')



/// 조건문 (If statement)
// getRandom.js 생성

import random from "./getRandom"

const a = random()

if (a === 0) {
  console.log('a is 0')
} else {
  console.log('rest...')
}


if (a === 0) {
  console.log('a is 0')
} else if (a === 2) {
  console.log('a is 2')
} else if (a === 4) {
  console.log('a is 4')
} else if (a === 6) {
  console.log('a is 6')
} else if (a === 8) {
  console.log('a is 8')
} else {
  console.log('rest...')
}


/// 조건문 (Switch statement)

import random from "./getRandom"

const a = random()

switch (a) {
  case 0:
    console.log('a is 0')
    break
  case 2:
    console.log('a is 2')
    break
  case 4:
    console.log('a is 4')
    break
  case 6:
    console.log('a is 6')
    break
  default:
    console.log('rest...')
}


/// 반복문 for
// for (시작조건; 종료조건; 변화조건) {}

const ulEl = document.querySelector('ul')

console.log(ulEl)

for (let i = 0; i < 10; i += 1) {
  const li = document.createElement('li')
  li.textContent = `list-${i + 1}`
  if ((i + 1) % 2 === 0) {
    li.addEventListener('click', function () {
      console.log(li.textContent)
    })
  }
  ulEl.appendChild(li)
}

// 변수 유효 범위(Variable Scope)
// var(함수레벨), let(블록레벨), const(블록레벨)

function Scope() {
  // console.log(a) => error
  if (true) {
    // console.log(a) => undefined
    const a = 123
    console.log(a) // = OK
  }
//  console.log(a) => error
}
Scope()


function Scope() {
  // console.log(a) => undefined
  if (true) {
    // console.log(a) => undefined
    var a = 123
    console.log(a) // = OK
  }
//console.log(a) => OK
}
Scope()






// 형 변환(Type conversion) - JS에선 사용 자제

// Truthy (참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14'...

//Falsy (거짓 같은 값)
//false, '', null, undefined, 0, -0, NaN

const a = 1
const b = '1'

console.log(a == b)




if ('false') {
  console.log(123)
}