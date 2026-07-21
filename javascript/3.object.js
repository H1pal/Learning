/* Object 종류 */

import { log } from "console";
import { fsync } from "fs";
import { type } from "os";


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

console.log(student.name, student.number);
console.log(student.attribute('belongss'));


/* function */
// 함수도 객체 중 하나
console.log(); // <- 이 형식은 모두 함수


// 사용자 지정 함수
function sayHello(name) {
  console.log(`Hello ${name}`); // 백틱 기호 (간편한 문자열 포맷팅 지원)
}

const nameList = ['heepal', 'napal', "Mother", "Father"];
nameList.forEach((name, seq) => { sayHello(`${name} who have ${seq + 1} | num!`) });

