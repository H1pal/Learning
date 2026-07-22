
const age = parseInt("100age");

console.log(`Your Age: ${age}`);
console.log(typeof age);
console.log(isNaN(age));

console.log(isFinite(age));

// && -> 모든 경우가 참이어야 true (and)
// || -> 하나라도 참이라면 true (or)
// ! -> 불리언 뒤집기(not)
// == -> 자동 타입 추론, 자료형 상관 없이 같으면 true (위험)
// === -> 자료형까지 같아야 true ()
const condition = isNaN(age)
if (condition || age < 0) {
  document.write("please write a number");
  // condition === true
} else if (age > 100) {
  console.log("You're almost died");
} else if (age > 50) {
  console.log("You're tooooooooooo Muture");
} else if (age >= 18 && age <= 30) {
  console.log("Ŷ"); 
} else if (age >= 10) {
  console.log("Too Small");
} else if (age === 0) {
  console.log("babysssssss");
} else {
  console.log("NOOOOOOOOOOOO");
}

// 단락 평가