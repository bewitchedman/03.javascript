// export default: js 함수 밖으로 내보내기
// random이란 이름의 함수를 만들어서 
// 로직을 만들고 return으로 반환

export default function random() {
  return Math.floor(Math.random() * 10)
}