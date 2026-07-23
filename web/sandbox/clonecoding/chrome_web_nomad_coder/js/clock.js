const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  let timer = `${hours}:${minutes}:${seconds}`;

  clock.innerText = timer;
}
// 5000ms 간격으로 다음 콜백 함수를 계속 실행
getClock();
const interval = setInterval(getClock, 1000);

// 3000ms 이 후에 최초 한 번 실행
// setTimeout("hello", 3000); 
