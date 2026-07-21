const [a, b] = [5, 2]; /* 패킹과 언패킹 */
const myName = "heepal"; 
console.log(a);
console.log(b, '\n');

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
console.log(parseInt(15 ** 0.5)); // sqrt


console.log(); // '\n' 용도
/* 문자열 연산 (자동 형변환) */
console.log("23" + a); // -> 문자열
console.log("23" - a); // -> 정수
console.log("23" * a); // -> 정수
console.log("23" / a); // -> 실수
console.log("23" % a); // -> 정수

console.log("hello " + myName); 
console.log("hello " * a); // "hello"는 숫자로 변경이 불가하므로 NaN 출력