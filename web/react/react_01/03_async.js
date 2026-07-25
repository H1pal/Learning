/* 실행 순서 추적하기 ex00
 * 코드 실행 전 출력 순서를 적는다.
 * 동기 실행 코드를 표시한다.
 * 비동기로 실행되는 콜백을 표시한다.
 * 왜 이 순서로 출력되는지 한 문장으로 설명한다.
 * setTimeout의 콜백은 __________에서 기다린 후, __________이 비었을 때 실행된다.
 */

console.log('주문 접수');

setTimeout(() => {
  console.log('음료 완성');
}, 1000);

console.log('다음 주문 접수');


/* ex01
 * 잘못된 코드 고치기
 * [요구사항]
 * - 현재 코드에서 "작업 완료"가 언제 출력되는지 확인한다.
 * - 1초 후 출력되도록 수정한다.
 * - showMessage 함수의 매개변수 구조를 변경하지 마세요
 * - 수정한 이유를 설명한다.
 */

function showMessage(message) {
  console.log(message);
}

console.log('시작');
setTimeout(() => {
  showMessage("작업 완료");
}, 1000);
console.log('끝');


/* ex02
 * 음식 주문 처리 과정 만들기
 * 다음과 같이 출력되는 프로그램을 작성하세요.
 * 
 * 김밥 주문 접수
 * 라면 주문 접수
 * 모든 주문 접수 완료
 * 라면 조리 완료
 * 김밥 조리 완료

 * [조건]
 * 김밥은 2초 후 완성된다.
 * 라면은 1초 후 완성된다.
 * setTimeout을 두 번 사용한다.
 * 콜백 함수는 화살표 함수로 작성한다.
 */

console.log("김밥 주문 접수");
console.log("라면 주문 접수");
console.log("모든 주문 접수 완료");

setTimeout(() => {
  cookedLamen();
  return;
}, 1000);
setTimeout(() => {
  cookedGimbab();
  return;
}, 2000);

function cookedGimbab() {
  console.log("김밥 조리 완료");
}

function cookedLamen() {
  console.log("라면 조리 완료");
}

// ex03
// function double(num) {
//   return setTimeout(() => {
//     const doubleNum = num * 2;
//     return doubleNum;
//   }, 1000);
// }

// const res = double(10, double); // 비동기는 일반적으로 작업 결과를 반환할 수 없음
// console.log(res);

//ex03의 개선된 코드(콜백지옥 우려)
function double(num, callback) {
  setTimeout(() => {
    const doubleNum = num * 2;
    callback(doubleNum);
  }, 1000);
}

double(10, (result) => {
  console.log(result);
})