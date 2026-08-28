// 숫자 7의 제곱수를 구하는 Promise
const calculateSquare = new Promise((resolve) => {
  const number = 7;

  console.log("계산을 시작합니다.");
  
  setTimeout(() => {
    const result = number * number;
    resolve(result);
  }, 1000);
});

calculateSquare.then((result) => {
  console.log(`계산 결과: ${result}`);
});


// 상품 정보 조회

const productList = {
  "macbook": 120000,
  "laptop": 908070,
  "react": 1234567890
};

function getProductPrice(productName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (productName === '') {
        reject(new Error("상품명을 입력하세요."));
        return;
      }
      if(productName !== "notebook") {
        reject(new Error("상품을 찾을 수 없습니다."));
        return;
      }
      resolve(1200000);
    }, 1000)
  });
}

getProductPrice("smartphone")
.then((price) => {
  console.log(`상품 가격은 ${price}원입니다.`);
})
.catch((error) => {
  console.log(`오류: ${error.message}`);
});



// 서버에서 요일별 급식 메뉴를 조회하는 상황을 나타내는 promise
const menuPerDayofWeek = {
  "월요일": "돈가스", 
  "화요일": "비빔밥",
  "수요일": null, 
  "목요일": null, 
  "금요일": null
};

function getLunchMenu(day) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (menuPerDayofWeek[day] === null) {
        reject(new Error("상품명을 찾을 수 없습니다."));
      }
      resolve(menuPerDayofWeek[day]);
    }, 1000);
  });
}

getLunchMenu("수요일")
.then((menu) => {
  console.log(menu);
})
.catch((error) => {
  console.log(`오류: ${error.message}`);
});

// Promise 체인이란?
// >> then() 뒤에 또 다른 then()을 연결하는 구조 [상품 조회 -> 할인 계산 -> 배송ㅇ비 계산 -> 최종 가격 출력]
// then()은 항상 새로운 Promise를 반환
// 다음 작업이 앞의 비동기 작업을 기다려야 한다면 앞선 작업에서 Promise를 반드시 return해야 한다.
// Promise 성공 -> then(), 실패 -> catch()

function getGameScore(score) {
  return new Promise((reoslve, reject) => {
    setTimeout(() => {
      if (score < 0 || score > 100) {
        reject(new Error("게임 점수를 불러오지 못했습니다."));
        // score가 0이상 100이하가 아닐 시 오류 발생
      }
      reoslve(score);
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