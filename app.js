const gas = [20, 40, 100, 30];

const food = [10, 40, 50];

function calculateTotal(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  if (total > 100) {
    console.log("over spending");
  } else console.log("you are within your budget");
}

const gasTotal = calculateTotal(food);
const foodTotal = calculateTotal(gas);
const randomTotal = calculateTotal();

console.log({
  gas: gasTotal,
  food: foodTotal,
  randomTotal: randomTotal,
});
