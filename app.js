let names = ["john", "bobo", "barry", "olga", "ben"];

//length

console.log(names.length);

console.log(names[names.length - 1]);

// concat

const lastNames = ["pepper", "onion", "banana"];

const allNames = names.concat(lastNames);

console.log(allNames);

console.log(allNames.reverse());

allNames.pop("susy");

console.log(allNames);
