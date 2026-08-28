
// promise 동작 따라가기
// promise란 비동기 작업의 완료 여부와 그 결과를 나타내는 객체
// -> promise는 콜백의 단점을 보완함
function doubleNumber(num) {
  return new Promise((resolve) => {
    console.log('2. 비동기 작업을 시작합니다.');

    setTimeout(() => {
      const result = num * 2;

      console.log('5. 계산이 완료되었습니다.');
      resolve(result);
    }, 1000);
  });
}

console.log('1. doubleNumber 함수를 호출합니다.');

const promise = doubleNumber(5);

console.log('3. 함수가 반환한 값:', promise);

promise.then((result) => {
  console.log('6. then에서 받은 결과:', result);
});

console.log('4. 함수 호출 이후의 코드를 실행합니다.');