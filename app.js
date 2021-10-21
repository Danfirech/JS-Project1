const person = {
  name: "john",
  lastName: "peters",
  age: 40,
  education: false,
  married: true,
  siblings: ["anna", "susan", "peter"],
  greeting: function () {
    console.log("Hello my name is John");
  },
};

console.log(person.siblings[2]);
person.greeting();

const age = person.age;
