// 비동기asunchronous)

/** 비동기의 역사
 * 콜백함수(setTimeout, setInterval, addEventListner) -> 
 * fetch, then ->
 * async, await
 */

// 1. 콜백함수
function sayHello() {
  console.log("transact 222222");
}

function name(task) {
  task();
}

console.log("transact 111111");
name(sayHello);
console.log("transact 33333333");

