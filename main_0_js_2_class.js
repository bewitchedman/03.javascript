// 생성자 함수 prototype
// this는 eddie를 지칭, 변수는 변경될 수 있기 때문에 사용
// Member

const eddie = {
  firstName: 'Eddie',
  lastName: 'Kang',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}
//console.log(eddie)
console.log(eddie.getFullName())


const amy = {
  firstName: 'Amy',
  lastName: 'Clarke',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(amy.getFullName())


const neo = {
  firstName: 'Neo',
  lastName: 'Smith',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(neo.getFullName())




// 규모가 크고 복잡한 로직이 적용된 경우
// 내용 축소
// JS Class 로 수정

// 생성자 함수의 경우, 첫 글자를 대문자로 표기
function User(first, last) {
  this.firstName = first
  this.lastName = last
}
// prototype 속성에 getFullName
// prototype을 많이 사용
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

// const 인스턴스 // 생성자 함수
const eddie = new User('Eddie', 'Kang')
const amy = new User('Amy', 'Clarke')
const neo = new User('Neo', 'Smith')

console.log(eddie.getFullName())
console.log(amy.getFullName())
console.log(neo.getFullName())

// 리터럴 방식
//const eddie = {}



// es2015 방식
class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  // prototype 속성에 getFullName
  // prototype을 많이 사용
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

// const 인스턴스 // 생성자 함수
const eddie = new User('Eddie', 'Kang')
const amy = new User('Amy', 'Clarke')
const neo = new User('Neo', 'Smith')

console.log(eddie.getFullName())
console.log(amy.getFullName())
console.log(neo.getFullName())



/// this
// 일반(Normal) 함수는 [호출 위치]에서 this 정의!
// 화살표(Arrow) 함수는 자신이 [선언된 함수 범위]에서 this 정의!

const eddie = {
  name: 'Eddie',
  normal: function () {
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}
eddie.normal()
eddie.arrow()

const amy = {
  name: 'Amy',
  normal: eddie.normal,
  arrow: eddie.arrow
}

amy.normal()
amy.arrow()



//
function User(name) {
  this.name = name
}

User.prototype.normal = function () {
  console.log(this.name)
}
User.prototype.arrow = () => {
  console.log(this.name)
}

const eddie = new User('Eddie')

eddie.normal()
eddie.arrow()



// 그래서 이 경우에는 callback을 사용하는 편이 좋음
const timer = {
  name: 'Eddie!!',
  timeout: function () {
    //setTimeout(함수, 시간), callback으로 사용하는 것이 좋음
    setTimeout(() => {
      console.log(this.name)
    }, 2000)
  }
}
timer.timeout()



/// ES6 Classes
class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const eddie = new User('Eddie', 'Kang')
const amy = new User('Amy', 'Clarke')
const neo = new User('Neo', 'Smith')

console.log(eddie.getFullName())
console.log(amy.getFullName())
console.log(neo.getFullName())




// 상속(확장) - extend / super = Vehicle

class Vehicle {
  constructor(name, wheel) {
    this.name = name
    this.last = wheel
  }
}
const myVehicle = new Vehicle('운송수단', 2)
console.log(myVehicle)

//
class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel)
  }
}
const myBicycle = new Bicycle('삼천리', 2)
const daughtersBicycle = new Bicycle('세발', 3)
console.log(daughtersBicycle)

//
class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel)
    this.license = license
  }
}
const myCar = new Car('BMW', 4, true)
const daughtersCar= new Car('Porche', 4, false)
console.log(myCar)
console.log(daughtersCar)