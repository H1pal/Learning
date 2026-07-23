import { API_KEY } from "../config.js";

function onGeoSuccess(position) {
  
  const lat = position.coords.latitude; // 위도
  const lng = position.coords.longitude; // 경도
  const url = 
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`

  // 파일 요청
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const weather = document.querySelector("#weather_container span:first-child");
    const city = document.querySelector("#weather_container span:last-child");
    const name = data.name;

    city.innerText = name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    console.log(data.name, data.weather[0].main);
  })
  .catch(error => {console.error("error:", error);
  });
}

function onGeoError() {
  alert("Can't find you. No weather for you");
}

// 사용자의 위치를 찾을 수 있다면 onGeoSuccess, 그렇지 안다면 onGeoError 함수가 실행
//onGeoSuccess에 "GeolocationPosition 전달"
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);