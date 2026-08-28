// 코드를 일방적인 순차 처리로 보이게 함으로써 코드의 가독성을 살려줌
async function orderProduct() {
  try {
    const product = await checkStock("키보드");
    const paymentResult = await makePayment(product);
    const deliveryResult = await prepareDelivery(paymentResult);

    console.log(deliveryResult);
    
  } catch(error) {
    console.log(`주문 실패: ${error.message}`);
  }
}

orderProduct();

// 데이터 가져오는 시늉 
function fetchDate() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("데이터 가져오기 성공");
    }, 2000);
  });
}

async function showDate() {
  console.log("데이터 가져오는 중...");
  
  const result = await fetchDate();
  console.log(result);
}

showDate();