const constant = 10; /* 재할당, 재선언 불가(가장 바람직한 자료형 선언문) */
let let_var = 20; /* 재할당 가능, 재선언 불가 */
var variable = 30; /* 재선언, 재할당 모두 가능 */

// const constant = 15; 재선언 불가
// let let_var = 10; 재선언 불가
var variable = 20; // 재선언 가능

// constant = 20; 재할당 불가
let_var = 10; // 재할당 가능
var variable // 재할당 가능

console.log(constant);
console.log(let_var);
console.log(variable);


function func(a, b) {
  var title = `${b}`;
  var title = a;
  
};


if (true) {
  var variable = '0+0'
  let let_let_var = 'fangtooth'
}

func(1, 2);

// console.log(title);


/* var는 변수 스코프 범위 내부 */
console.log(variable);

/* console.log(let_let_var); */ // 오류 발생 let, const는 유효 스코프 범위 밖에서 호출


const integer = 10;
const floater = 10.5;
const str = "Hello world";
const arr = [1, 2, 3, 4, 5];
const arr2 = Array(5)
const bool = true;
// const noDefined; 상수는 undefined 불가
let noDefined;
const amIfat = null;

console.log(noDefined, amIfat);
console.log(arr2);


console.log();

/* 형변환 */
/**
 * 자바스크립트는 동적 스크립트 언어,
 * 즉 Python과 비슷하게 실행 중에 자동으로 형변환이 일어남
 * (변수 및 상수 선언 시에 자료형 선언을 안 하는 이유)
*/


console.log(typeof integer); // 정수형 타입
console.log(typeof integer.toString()); // 문자열로 형변환
console.log(typeof String(integer)); // 문자열로 형변환
console.log();


/** toString()은 null이나 undefined를 문자형으로 변환하려고 할 시 에러
 * -> String()이 안전한 방법
 */
console.log(String(true));
console.log(String(null));
console.log(String(undefined));

console.log(true.toString());
// console.log(null.toString()); 
// console.log(undefined.toString());
console.log();


const char = "0417은 내 생일"
console.log(Number(char)); // Number()는 문자열 섞이면 NaN 
console.log(parseInt(char)); // parseInt()는 문자열 중 숫자만 추출, 숫자가 없을 시 NaN
console.log(parseInt("10.6")); // 소숫점은 버림
console.log(typeof(parseFloat("10.6"))); // 문자열 -> 실수형: Number

console.log();


/* boolean형 */
console.log(Boolean("hello"));
console.log(!!"Hello"); // "!" 연산자는 불리언 값이 반전됨 -> [Boolean() === !!]
console.log(!!0);
console.log(!![]); // 빈 배열 === 객체 === true
console.log(!!undefined);
console.log(!!null);
console.log(!!NaN);