import { API_KEY } from "../config.js";

const weather = document.querySelector("#weather_container span:first-child");
const city = document.querySelector("#weather_container span:last-child");

async function fetchWeather(url) {
  try {
    const response = await fetch(url); // 날씨 API 요청

    // catch에서 잡지못하는 HTTP 오류를 잡는 조건문(서버 응답이 200~299가 아니면 에러를 던짐)
    if (!response.ok) {
      throw new Error(`오류: 상태코드: ${response.status}`);
    }

    const data = await response.json(); 

    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;

    console.log(data.name, data.weather[0].main);
  } catch (error) {
    console.error("에러 발생:", error);
    weather.innerText = "날씨 정보를 불러올 수 없습니다."
  }
}

function onGeoSuccess(position) {
  
  const lat = position.coords.latitude; // 위도
  const lng = position.coords.longitude; // 경도
  //'unit=metric'은 화씨였던 온도를 섭씨로 변경해줌(자세한 건 문서)
  const url = 
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  

  // 기존 API 요청 비동기 코드
  // fetch(url)
  // .then(response => response.json())
  // .then(data => {
  //   const weather = document.querySelector("#weather_container span:first-child");
  //   const city = document.querySelector("#weather_container span:last-child");
  //   const name = data.name;

  //   city.innerText = name;
  //   weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  //   console.log(data.name, data.weather[0].main);
  // })
  // .catch(error => {console.error("error:", error);
  // });


  fetchWeather(url); // async 함수로 작성하여 비동기 코드 구조와 가독성 개선
}

function onGeoError() {
  alert("Can't find you. No weather for you");
}

// 사용자의 위치를 찾을 수 있다면 onGeoSuccess, 그렇지 안다면 onGeoError 함수가 실행
// onGeoSuccess에 "GeolocationPosition 전달"
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);