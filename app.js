const wallheight = 80;

const height = calculate(100);
const widthc = calculate(wallheight);

const dimensions = [width, height];
console.log(dimensions);

function calculate(value) {
  console.log("the value in cm is: " + value * 2.54 + "cm");
  return 45;
}

calculate();
