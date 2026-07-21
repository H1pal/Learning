import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

async function main() {
  const rl = readline.createInterface({ input, output });
  
  const amount = Number(await rl.question(''));
  let totalRemaining = 0;
  let student, apple;
  for (let i = 0; i < amount; i++) {
    [student, apple] = (await rl.question(''))
    .split(" ")
    .map( (value) => Number(value) );

    totalRemaining += apple % student;
  }
  rl.close();

  console.log(totalRemaining);
}

main();