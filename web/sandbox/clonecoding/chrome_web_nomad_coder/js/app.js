const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");
const greeting = document.getElementById("greeting");
// const loginButton = document.querySelector("#login_form button");
// const link = document.querySelector("a");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASS);
  
  const userName = loginInput.value;
  
  localStorage.setItem(USERNAME_KEY, userName); // 로컬저장소에 key가 userName인 입력된 userName을 저장
  
  paintingGreeting();
  
  
  console.log(userName); // 확인용 출력
  
  
  // if (usreName === "") {
  //   alert("Please write your name");
  // } else if (usreName.length > 15) {
  //   alert("Your name is too long");
  // } else if (usreName.length < 1) {
  //   alert("Your name is too short");
  // }
  // require와 maxlength로 처리 가능
}

function paintingGreeting() {
  const userName = localStorage.getItem(USERNAME_KEY);
  greeting.classList.remove(HIDDEN_CLASS);
  greeting.innerText = `Hello ${userName}`;
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) { // show the form
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLoginSubmit);
} else { // hide the form
  paintingGreeting();
}



// function handleLinkClick(event) {
//   event.preventDefault();
//   console.log(event);
// }

// link.addEventListener("click", (e) => {
//   handleLinkClick(e);
// });