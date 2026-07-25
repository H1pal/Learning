// alert('hi');

// const title = document.getElementById("title"); // id가 title인 요소 가져오기
// title.innerText = "gotchu"; // title 변경

// const hellos = document.getElementsByClassName("introduce");
// console.log(hellos);

// querySelector() -> 가장 첫번째 요소를 가리킴
// querySelectorAll() -> 해당 태그를 가진 모든 요소
// getElementById() -> 
const title = document.querySelector("#title");
const writing = ["TodoList", "Add Your Own Todo"];

let pointer = 0;
let changeTitle;

startTimer();

function startTimer() {
  changeTitle = setInterval(() => {
    pointer ^= 1;
    title.innerText = writing[pointer];
    console.log(writing[pointer]);
  }, 2500);
}

title.addEventListener("mouseenter", () => {
  controlStyle(qeury = title, backgroundColor = undefined ,contentColor = "Gray", scale = "scale(1.1)");
  clearInterval(changeTitle);
});
title.addEventListener("mouseleave", () => {
  controlStyle(title);
  startTimer();
});

function controlStyle(query, backgroundColor = "transparent", contentColor = "Black", scale = "scale(1)") {
  query.style.backgroundColor = backgroundColor;
  query.style.color = contentColor;
  query.style.transform = scale
}

console.dir(title);