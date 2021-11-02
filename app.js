const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 25, position: "designer" },
  { name: "susy", age: 20, position: "the boss" },
];

const ages = people.map(function (person) {
  return person.age + 20;
});

const newPeople = people.map(function (person) {
  return { firstname: person.name.toUpperCase(), oldAge: person.age + 20 };
});

console.log(newPeople);

const names = people.map(function (person) {
  return `<h1>${person.name}</h1>`;
});

document.body.innerHTML = names.join("");

console.log(names);
