/* Object 종류 */
/* 1. 배열 */
/**
 * 다른 언어들과 다르게 javascript의 배열은 object,
 * index 번호가 key로 접근함
 */

const arr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const arr2 = Array(1, 'mon', [1, 2], true, (p1) => { console.log(p1); });
const arr3 = Array(5);

console.log(arr);
console.log(arr2);
console.log(arr2[2][1]);
arr2[4]('Hello World');

console.log(arr3);
console.log(arr3.length);


arr3[100] = 999; // OutOfboundsException이 발생하지 않음 -> 배열의 범위를 마음대로 수정 가능
console.log(arr3);
console.log(arr3.length);

/* Object */
const student = {
  name: "heepal",
  number: 12,
  score: 3.9,
  handsome: true,

  attribute: (i) => { 
    console.log(i); 
    return typeof(i);
  }
};

// property
console.log(student.name, student.number);
console.log(student.attribute('belongss'));


const calculator = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  mul: (a, b) => a * b, 
  div: (a, b) => a / b, 
  squ: (a, b) => a ** b
};

Object.entries(calculator)
.forEach(([key, func]) => {

  console.log(`${key}: ${func(10, 2)}`);
});



/* Function */
// 함수는 일급 객체
// 함수를 선언하는 형식은 다양함
console.log(); // <- 이 형식은 모두 함수

// 1. 함수 선언문
function sayHello(name) {
  const hello = `Hello ${name}`;
  console.log(hello); // 백틱 기호 (간편한 문자열 포맷팅 지원)
  return hello
}

const returnValue = sayHello("lalalala");
console.log(returnValue);
console.log(typeof returnValue);

const nameList = ['heepal', 'napal', "Mother", "Father"];
nameList.forEach((name, seq) => { sayHello(`${name} who have ${seq + 1} | num!`) });

// 2. 함수 표현식
const sayBye = function(keyword) {
  console.log(`안녕히 계세요. 저는 이 세상을 모든 굴레와 속박을 벗어던지고 ${keyword}를 찾아 떠날 거에요`);
};

sayBye('임상혁');

// 3. 화살표 함수
// 현재 가장 많이 쓰는 형식
// 중괄호 생략 가능(생략 시 자동으로 return)
// 매개변수가 딱 1개라면 괄호도 생략 가능
const arrowFunc = (someone) => console.log(`${someone}'s arrow`);
arrowFunc('또 다른 임상혁');

const sqrt = x => x ** 0.5;


// 콜백 함수
function bg_func(callback) {
  callback();
  return 
}

bg_func(() => arrowFunc('임상혁 아들'));

/* hoisting(호이스팅): 변수와 함수의 선언부를 코드의 최상단으로 
끌어올리는 것처럼 동작하는 자바스크립트 고유의 특징 */

plus(50, 30); // 함수 호이스팅
console.log(name); // 변수 호이스팅 -> undefined

function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
} 

var name = "Son"; 
/* 
(let과 const도 호이스팅은 가능하지만, 
안전성을 위해 TDZ라는 영역에 갇혀 컴퓨터가 접근을 금지함) 
*/

// 익명 함수(함수 표현식 또는 화살표 함수)는 변수의 호이스팅 규칙을 따릅니다

const [n1, n2] = [10, 20];

// const rv = func(n1, n2);
// const rv = let_func(n1, n2);

var func = function(n1, n2) {
  return n1 ** n2;
};
let let_func = function(n1, n2) {
  return n1 % n2;
};

const player = {
  sayHello: () => console.log("Hell yah wikiwiki")
  
};

player.sayHello();

