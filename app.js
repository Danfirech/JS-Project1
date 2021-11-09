const result = document.querySelector("#result");

result.style.backgroundColor = "blue";

const item = document.querySelectorAll(".special");

const lastItem = document.querySelector("li:last-child");

const list = document.querySelectorAll(".special");
console.log(list);

list.forEach(function (item) {
  console.log(item);
  item.style.color = "yellow";
});
