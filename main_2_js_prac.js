////////// 가져오기, 내보내기
// main.js
//// import는 있으나 export가 없음

// xxx.js
//// import는 없고 export가 있음
//// Default export (기본 설정 export, 이름 설정해도 안해도 됨)
//// Named export (이름 지정이 필요)

// default라 이름을 지정하나 지정하지 않나 동일하게 적용
export default function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}

export default function (data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}

// default라서 이름을 변경해도 두개가 동일함
import getType from './getType' //getType.js
console.log(_.camelCase('the hello world'))
console.log(getType([1, 2, 3]))

import checkType from './getType' //getType.js
console.log(_.camelCase('the hello world'))
console.log(checkType([1, 2, 3]))


// default
export default function random() {
  return Math.floor(Math.random() * 10)
}

// default가 아닌 경우
export function random() {
  return Math.floor(Math.random() * 10)
}
// default가 아닌 경우 main.js에서 변경
// import getRandom from './getRandom' //getRandom.js
import { random } from './getRandom' //getRandom.js

// default가 아닌 경우, named export 추가 가능
export function random() {
  return Math.floor(Math.random() * 10)
}

export const user = {
  name: 'Eddie',
  age: 30
}


// main.js
import { random, user } from './getRandom' //getRandom.js

console.log(random(), random())
console.log(user)

// theHelloWorld
// Array
// 4 5
//  
// {name: 'Eddie', age: 30}
//   age: 30
//   name: "Eddie"


import * as R from './getRandom'
// * : Wildcard Character. 애스터 리스크??
console.log(R)
// getRandom 에서 모두 가져와 R이라는 변수로 지정



////////// Lodash
// 중복 데이터 제거
// _.uniq

import _ from 'lodash'

// []: 배열 데이터, {}: 객체 데이터
const usersA = [
  { userId: '1', name: 'Eddie' },
  { userId: '2', name: 'Ethan' }
]

const usersB = [
  { userId: '1', name: 'Eddie' },
  { userId: '3', name: 'Amy' }
]

const usersC = usersA.concat(usersB)
// concat은 두 개의 배열 데이터를 합쳐 
// 새로운 배열 데이터로 반환
console.log('concat', usersC)
console.log('uniqBy', _.uniqBy(usersC, 'userId'))
// _.uniqBy(usersC, 'userId'))
// 하나의 배열에서 유일한 값만 반환
// usersC 배열에서 유일한 값만 합치며, userId로 구분

// 두 가지 이상의 배열을 합치기 전이면, _.unionBy 사용
// 고유한 값만 합쳐서 반환
const usersD = _.unionBy(usersA, usersB, 'userId')
console.log('unionBy', usersD)


//concat (4) [{…}, {…}, {…}, {…}]
//  0: {userId: '1', name: 'Eddie'}
//  1: {userId: '2', name: 'Ethan'}
//  2: {userId: '1', name: 'Eddie'}
//  3: {userId: '3', name: 'Amy'}
//  length: 4
//  [[Prototype]]: Array(0)
//
//uniqBy (3) [{…}, {…}, {…}]
//  0: {userId: '1', name: 'Eddie'}
//  1: {userId: '2', name: 'Ethan'}
//  2: {userId: '3', name: 'Amy'}
//  length: 3
//  [[Prototype]]: Array(0)
//
//unionBy (3) [{…}, {…}, {…}]
//  0: {userId: '1', name: 'Eddie'}
//  1: {userId: '2', name: 'Ethan'}
//  2: {userId: '3', name: 'Amy'}
//  length: 3
//  [[Prototype]]: Array(0)




import _ from 'lodash'

// []: 배열 데이터, {}: 객체 데이터
const users = [
  { 
    userId: '1', 
    name: 'Eddie' 
  },
  { 
    userId: '2', 
    name: 'Ethan' 
  },
  { 
    userId: '3', 
    name: 'Amy' 
  },
  { 
    userId: '4', 
    name: 'Evan' 
  },
  { 
    userId: '5', 
    name: 'Lewis' 
  }
]

const foundUser = _.find(users, { name: 'Amy' })
// name이라는 속성 부분에 Amy라는 객체를 찾기
const foundUserIndex = _.findIndex(users, { name: 'Amy' })

console.log(foundUser)
console.log(foundUserIndex)

_.remove(users, { name: 'Lewis' })
console.log(users)


// {userId: '3', name: 'Amy'}
// 2
// (4) [{…}, {…}, {…}, {…}]
//   0: {userId: '1', name: 'Eddie'}
//   1: {userId: '2', name: 'Ethan'}
//   2: {userId: '3', name: 'Amy'}
//   3: {userId: '4', name: 'Evan'}
//   length: 4
//   [[Prototype]]: Array(0)






////////// JSON (JavaScript Object Notation)
// 자바스크립트의 객체 표기법

import myData from './myData.json'

console.log(myData)

const user = {
  name: 'Eddie',
  age: 30,
  emails: [
    'bewitchedman@naver.com',
    'keast5204@naver.com'
  ]
}
console.log('user', user)

const str = JSON.stringify(user)
console.log('str', str)
console.log(typeof str)

const obj = JSON.parse(str)
console.log('obj', obj)




////////// Storage
////// Browser의 개발자화면(F12)에서
// console 말고 application >> Storage
// Local Storage와 Session Storage 차이
// google에서 local strage mdn 검색
// Local Storage의 데이터는 페이지를 닫아도 만료되지 않지만
// Session Storage의 데이터는 페이지를 닫을 때 사라진다.

// localstorage는 사이트에 종속되어 관리됨

// 저장 setItem, 가져오기 getItem, 제거 removeItem
// localStorage.setItem(데이터);
// localStorage.setItem(key, value);
// localStorage.setItem('myCat', 'Tom');



const user = {
  name: 'Eddie',
  age: 30,
  emails: [
    'bewitchedman@naver.com',
    'keast5204@naver.com'
  ]
}


localStorage.setItem('user', user)
// 문자 데이터화
localStorage.setItem('user', JSON.stringify(user))

// 콘솔 출력, JSON으로 나오네??
console.log(localStorage.getItem('user'))
// javascript 형식으로 변환
console.log(JSON.parse(localStorage.getItem('user')))

// 나이 변경
const str = localStorage.getItem('user')
const obj = JSON.parse(str)
obj.age = 22
console.log(obj)
// localstorage 갱신
localStorage.setItem('user', JSON.stringify(obj))

// 제거
//localStorage.removeItem('user')



////////// lowdb




////////// omdbapi (open movie db API)
// 구글 검색
// querystring
// 기본 형태: 주소?속성=값&속성=값&속성=값
// & 엠퍼센트 
// http://www.omdbapi.com/?i=tt3896198&apikey=8aa4fb8
// https://www.omdbapi.com/?apikey=8aa4fb8&s=frozen
// axios

import axios from 'axios'

function fetchMovies() {
  axios
    .get('https://www.omdbapi.com/?apikey=8aa4fb8&s=frozen')
    .then((res) => {
      console.log(res)
    }) // method chaining (이전에 배웠다고 함)
}


// 결과
//{data: {…}, status: 200, statusText: '', headers: AxiosHeaders, config: {…}, …}
//  config: {transitional: {…}, adapter: Array(2), transformRequest: Array(1), transformResponse: Array(1), timeout: 0, …}
//  data: 
//    Response: "True"
//    Search: Array(10)
//      0: {Title: 'Frozen', Year: '2013', imdbID: 'tt2294629', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg'}
//      1: {Title: 'Frozen II', Year: '2019', imdbID: 'tt4520988', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMjA0YjYyZG…GYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg'}
//      2: {Title: 'Frozen', Year: '2010', imdbID: 'tt1323045', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MTg0ODgxMF5BMl5BanBnXkFtZTcwODEzOTYwMw@@._V1_SX300.jpg'}
//      3: {Title: 'The Frozen Ground', Year: '2013', imdbID: 'tt2005374', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BYzM3Mjc1ZD…zliMTdkXkEyXkFqcGdeQXVyMTAxNDE3MTE5._V1_SX300.jpg'}
//      4: {Title: 'Frozen Planet', Year: '2011–2012', imdbID: 'tt2092588', Type: 'series', Poster: 'https://m.media-amazon.com/images/M/MV5BYjdlMGYwYW…zdhYTI0XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg'}
//      5: {Title: 'Frozen River', Year: '2008', imdbID: 'tt0978759', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTk2NjMwMDgzNF5BMl5BanBnXkFtZTcwMDY0NDY3MQ@@._V1_SX300.jpg'}
//      6: {Title: 'Frozen Fever', Year: '2015', imdbID: 'tt4007502', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMjY3YTk5Mj…TZmOWRlXkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_SX300.jpg'}
//      7: {Title: "Olaf's Frozen Adventure", Year: '2017', imdbID: 'tt5452780', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BOWQ1NjNiZT…Tg1MGQ4XkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg'}
//      8: {Title: 'Frozen Stiff', Year: '2002', imdbID: 'tt0301634', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTk5NDc0MjU3Nl5BMl5BanBnXkFtZTcwNDc3NTU3OQ@@._V1_SX300.jpg'}
//      9: {Title: 'Frozen Land', Year: '2005', imdbID: 'tt0388318', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMDM2MzEzMm…TVmODQ4XkEyXkFqcGdeQXVyNjk3NDczNTM@._V1_SX300.jpg'}
//      length: 10
//      [[Prototype]]: Array(0)
//    totalResults: "346"
//    [[Prototype]]: Object
//  headers: AxiosHeaders {cache-control: 'public, max-age=86400', content-type: 'application/json; charset=utf-8', expires: 'Wed, 17 May 2023 16:47:09 GMT', last-modified: 'Wed, 17 May 2023 15:47:09 GMT'}
//  request: XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
//  status: 200
//  statusText: ""
//  [[Prototype]]: Object
//


// 영화 제목과 포스터를 index.html에 노출
// index.html
<!DOCTYPE html>
<html lang="ko">
...
<body>
  <h1>Hello World!</h1>
  <img src="" alt="" width="200">
</body>
</html>

// main.js
function fetchMovies() {
  axios
    .get('https://www.omdbapi.com/?apikey=8aa4fb8&s=frozen')
    .then(res => {
      console.log(res)
      const h1El = document.querySelector('h1')
      const imgEl = document.querySelector('img')
      h1El.textContent = res.data.Search[0].Title
      imgEl.src = res.data.Search[0].Poster
    }) // method chaining (이전에 배웠다고 함)
}

fetchMovies()