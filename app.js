/*
  Name: Roll the dices
  Inspiration: 
  https://www.reddit.com/r/dailyprogrammer/comments/8s0cy1/20180618_challenge_364_easy_create_a_dice_roller/
  -----------------------
  Input: '4d6' means - roll 6-sided dice 4 times and sum up the result
*/

let data, sides, times;
let result = 0;

function getDiceData(x) {
  data = x.split('d');
  times = parseInt(data[0]);
  sides = parseInt(data[1]);
  calculate();
}

function calculate() {
  for (let i = 1; i <= times; i++) {
    let tempResult = Math.floor(Math.random() * sides) + 1;
    result += tempResult;
    console.log(`Rolling the dice number: ${i}, result for this roll: ${tempResult}`)
  }
  console.log(result);
}

getDiceData('3d6');