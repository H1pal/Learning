import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";
const rl = readline.createInterface({input, output});

/* 00
이름과 콜백 함수를 전달받는 runGreeting 함수를 작성하세요.
runGreeting은 전달받은 콜백에 이름을 넘겨 실행합니다.

runGreeting("민수", sayHello);
// 안녕하세요, 민수님

*/
const name = await rl.question("What is your name: ");

function runGreeting(name, task) {
  task(name);
}

function sayHello(name) {
  console.log(`Hello ${name}`);
}

runGreeting(name, sayHello);


/* 01
조건에 따라 콜백 실행하기
점수가 60점 이상이면 onPass, 미만이면 onFail 콜백을 실행하는 checkScore 함수를 작성하세요.

checkScore(75, showPass, showFail);

*/
console.log();

const score = parseInt(await rl.question("What is your score: "));

checkScore(score, showPass, showFail);

function checkScore(score, onPass, onFail) {
  if (score >= 60) {
    onPass();
  } else {
    onFail();
  }
}

function showPass() {
  console.log("You're succeed");
}

function showFail() {
  console.log("you're failed");
}


/* 02
횟수와 콜백을 전달받는 repeat 함수를 작성하세요.
콜백에는 현재 반복 번호를 전달합니다.

repeat(3, printNumber);

// 1번째 실행
// 2번째 실행
// 3번째 실행
*/
console.log();

const repeatCount = parseInt(await rl.question("반복 횟수: "));
const printing = await rl.question("출력할 문자: ");

repeat(repeatCount, printing, myPrint);

function repeat(count, printing, task) {
  for (let i = 0; i < count; i++) {
    task(printing);
  }
}

function myPrint(word) {
  console.log(word);
}

/* 03
두 숫자와 계산 콜백을 전달받는 calculate 함수를 작성하세요.
콜백이 반환한 계산 결과를 출력합니다.

calculate(10, 3, add);       // 13
calculate(10, 3, multiply);  // 30
*/
console.log();

const [n1, n2] = (await rl.question("연산 숫자(n1, n2): ")).split(" ").map((n) => parseInt(n));
rl.close();


calculate(n1, n2); // 13

function calculate(n1, n2) {
  const calcList = [
    add,
    sub, 
    multiply,
    div
  ];

  calcList.forEach(func => {
    console.log(`${func.name}:`, func(n1, n2));
  });
}

function add(n1, n2) {
  return n1 + n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function sub(n1, n2) {
  return n1 - n2;
}

function div(n1, n2) {
  return n1 / n2;
}