/* ex00
미션 1 각 온도를 다음 형식으로 출력하세요.
현재 온도: 18도

미션 2 각 온도를 2도씩 높인 새 배열을 만드세요.

미션 3 25도 이상인 온도만 모은 새 배열을 만드세요.
*/

const temperatures = [18, 25, 31, 22];

temperatures.forEach((temper) => {
  console.log(temper);
});

const temperPlusTwo = temperatures.map((temper) => temper + 2);
console.log(temperPlusTwo);

const temperMoreThan25 = temperatures.filter((temper) => temper >= 25);
console.log(temperMoreThan25);

/* ex01
- filter로 80점 이상인 학생만 선택하세요.
- map으로 선택된 학생의 이름만 추출하세요.
- 목표 결과
["지우", "현우"]
*/
console.log();

const students = [
  { name: '민수', score: 75 },
  { name: '지우', score: 92 },
  { name: '현우', score: 84 },
  { name: '서연', score: 68 },
];

const studentIsScoreGood = students
.filter((stu) => stu.score >= 80)
.map((stu) => stu.name);

console.log(studentIsScoreGood);

console.log(
  students.reduce(() => {})
);