

import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });
const num = await rl.question("반복 숫자 입력: ");
rl.close();

const lines = num * 2 - 1;

let i, j;

// 모래 시계 모양
for (i = 0; i < lines; i++) {
  const line = Math.min(i, lines - i - 1);
  
  console.log(" ".repeat(line) +  "*".repeat(lines - line * 2));
}
console.log();

let recursivePattern;

// const pattern = hallowRectangularPattern(num).join("\n");
// console.log(pattern);


function hallowRectangularPattern(num) {
  if (num == 1) return ["*"];

  const prevStarts = hallowRectangularPattern(num / 3);
  const result = [];
  
  for (const s of prevStarts) {
    result.push(s.repeat(3));
  }
  
  for (const s of prevStarts) {
    result.push(s + " ".repeat(num / 3) + s);
  }
  
  for (const s of prevStarts) {
    result.push(s.repeat(3));
  }
  
  return result;
}


recursivePattern = leftsideTrianglePattern(num).reverse().join("\n");
console.log(recursivePattern);


function leftsideTrianglePattern(num) {
  if (num == 1) return ["*"];
  
  const prevStarts = leftsideTrianglePattern(num - 1);
  
  prevStarts.push("*".repeat(num));
  
  return prevStarts
}
console.log();


recursivePattern = rightsideTrianglePattern(num).join("\n");
console.log(recursivePattern);


function rightsideTrianglePattern(num, current = 1) {
  if (current > num) return [];

  const line = " ".repeat(num - current) + "*".repeat(current);

  return [line].concat(rightsideTrianglePattern(num, current + 1));
}
console.log();

recursivePattern = squarePattern(num).join("\n");
console.log(recursivePattern);

function squarePattern(num, cnt = 1) {
  if (cnt >= num) return ["*".repeat(num)];
  return ["*".repeat(num)].concat(squarePattern(num, cnt + 1));
}



function leftTurningTriangle(num) {
  if (num == 1) return [];
  

  return leftTurningTriangle(num - 1);
}

//         *
//        * *
//       *   *
//      *     *
//     *       *
//    *         *
//   *************
//  * * * * * * * *
// *****************
