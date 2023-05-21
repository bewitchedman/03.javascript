
// 함수 복습

function sum(x, y) { //매개변수 (x, y)
  console.log(x + y)
}

sum(1, 3) // 숫자들은 인수
sum(4, 12)


//////////////
function sum(x, y) { //매개변수 (x, y)
  return x + y
}

const a = sum(1, 3) // 숫자들은 인수
const b = sum(4, 12)

console.log(a)
console.log(b)
console.log(a + b)

//////////////

function sum(x, y) {
  
  return x + y   // 종료되기 때문에 아래는 의미 없음
  console.log(x) //의미가 없어서 흐릿하게 뜸
}

sum(1, 3)

//////////////////
function sum(x, y) {
  if (x < 2) {
    return  // 내용이 없기 때문에 undefined 뜸
  }
  return x + y   // 종료되기 때문에 아래는 의미 없음
}

console.log(sum(1, 3))


// 조건이 맞기 때문에 계산 결과가 나옴
function sum(x, y) {
  if (x < 2) {
    return 123
  }
  return x + y   
  
}

console.log(sum(7, 3))


//많이 사용되지는 않지만, 내용이 많을 경우, 
// arguments를 사용할 수 있음
function sum() {
  console.log(arguments)
  return  arguments[0] + arguments[1]
}

console.log(sum(7, 3))



// 화살표 함수
// () => {} vs function () {}

const double = function (x) {
  return x * 2
}
console.log('double: ', double(7))

const doubleArrow = (x) => {
  return x * 2
}
console.log('doubleArrow', doubleArrow(7))



// 축약형
const double = function (x) {
  return x * 2
}
console.log('double: ', double(7))

const doubleArroww = (x) => x * 2
console.log('doubleArrow', doubleArroww(7))



// x, y 중 아래에는 하나의 인수만 있을 경우
const double = function (x, y) {
  return x * 2
}
console.log('double: ', double(7))

const doubleArrowx = x => x * 2 
//null, undefined, 123, '123', false, [1,2,3]
// 객체 데이터도 가능
//const doubleArrow = x => ({ name: 'eddie' }) 
console.log('doubleArrow', doubleArrowx(7))



// 즉시실행함수
// IIFE, Immediately-Invoked Function Expression

const a = 7
function double() {
  console.log(a * 2)
}
double()

// 즉시 실행 함수는 함수 전체에 ()로 둘러쌈
// 하지만, 위 함수와 같이 저장할 경우, 에러
// 위 double()뒤에 세미콜론을 추가하여 해결

// (함수)()
(function () {
  console.log(a * 2)
})();

// (함수()) => 권장하는 함수 형태
(function () {
  console.log(a * 2)
}())





/// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const a = 7

const double = function () {
  console.log(a * 2)
}

double()



// 기본적으로 코드는 위에서 아래로 해석
// 함수를 위에서도 호출이 가능함
// 함수가 길어질 때 위에서 호출

const a = 7
// 함수 선언
double()

function double() {
  console.log(a * 2)
}




// 타이머 함수
// setTimeout(함수, 시간): 일정 시간 후, 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료
// 시간 기준은 ms, 1000ms 는 1s


setTimeout(function () {
  console.log('eddie!')
}, 3000)



// 3초 전에 클릭할 경우, 
// 3초 뒤에 표시되야 할 내용이 안 나옴
// clearTimeout 으로 setTimeout을 해제
const timer = setTimeout(() => {
  console.log('eddie!')
}, 3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearTimeout(timer)
})


// 위 쪽 함수만 적용할 경우
// 3초마다 추가로 표시
// 아래 clearInterval로 인해, 클릭하면 숫자 상승 멈춤
const timer = setInterval(() => {
  console.log('eddie!')
}, 3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearInterval(timer)
})




/// 콜백(callback)
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)
// 역시 3초후에 잘 나타남

function timeout() {
  setTimeout(() => {
    console.log('eddie!')
  }, 3000)
}
timeout()

// 앞 쪽 펑션이 3초 후 실행되기 때문에 
// Done이 먼저 실행 됨
// 기존 펑션 실행 후, Done 표기를 위한 Callback
function timeout() {
  setTimeout(() => {
    console.log('eddie!')
  }, 3000)
}
timeout()
console.log('Done!')

// 이렇게 하면 안된다고 하는데, 결국 기존 함수를 건듬
function timeout() {
  setTimeout(() => {
    console.log('eddie!')
    console.log('Done!')
  }, 3000)
}
timeout()


// callback 함수 추가 () => {}
function timeout(cb) {
  setTimeout(() => {
    console.log('eddie!')
    cb()
  }, 3000)
}
timeout(() => {
  console.log('Done!')
})