function morning(name) {
  return `Good Morning ${name.toUpperCase()}`;
}

function afternoon(name) {
  return `Good Morning ${name.toUpperCase()}`;
}

function greet(name, cb) {
  const myName = "john";
  console.log(`${cb(name)}, my name is ${myName}`);
}

greet("bobo", morning);

greet("peter", afternoon);

// function greetAfternoon(name) {
//   const myName = "john";
//   console.log(`good afternoon ${name}, my name is ${myName}`);
// }

// function greetMorning(name) {
//   const myName = "john";
//   console.log(`good morning ${name}, my name is ${myName}`);
// }
