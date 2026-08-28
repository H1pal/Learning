// Promise 체인이란?
// >> then() 뒤에 또 다른 then()을 연결하는 구조 [상품 조회 -> 할인 계산 -> 배송ㅇ비 계산 -> 최종 가격 출력]
// then()은 항상 새로운 Promise를 반환
// 다음 작업이 앞의 비동기 작업을 기다려야 한다면 앞선 작업에서 Promise를 반드시 return해야 한다.
// Promise 성공 -> then(), 실패 -> catch()

function getGameScore(score) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (score < 0 || score > 100) {
        reject(new Error("게임 점수를 불러오지 못했습니다."));
        // score가 0이상 100이하가 아닐 시 오류 발생
      }
      resolve(score);
    }, 1000);
  });
}

const basicScore = 50;
getGameScore(basicScore)
.then((score) => {
  console.log(`기본 점수: ${score}`);
  
  const bonusScore = 20;
  console.log(`보너스 적용! 보너스 점수: ${bonusScore}점`);
  
  return bonusScore + score;
})
.then((finalScore) => {
  console.log(`최종 점수: ${finalScore}`);
})
.catch((error) => {
  console.log(`오류: ${error.message}`);
});


/* asynchronous
 *재고 확인
  → 재고 확인 결과로 결제
  → 결제 결과로 배송 준비
  → 최종 결과 출력
*/

const stockList = [
  { name: "키보드", amount: 23, price: 20000 },
  { name: "모니터", amount: 0, price: 25000 },
  { name: "마이크", amount: 0, price: 3400 }
];


checkStock('키보드')
  .then((product) => {
    return makePayment(product);
  })
  .then((paymentResult) => {
    return prepareDelivery(paymentResult);
  })
  .then((deliveryResult) => {
    console.log(deliveryResult);
  })
  .catch((error) => {
    console.log(`주문 실패: ${error.message}`);
  });

function checkStock(product) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if ((stockList.filter((stock) => stock.name === product)).length > 0) {
        if (stockList) {
          resolve(product);

        } else {
          reject(new Error("재고가 충분하지 않습니다."));
        }
      } else {
        reject(new Error("유효하지 않은 상품입니다."));
      }
    }, 1000);
  });
}

function makePayment(product) {
  return
}

function prepareDelivery(product) {
  
}