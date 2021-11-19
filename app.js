const heading = document.querySelector("h1");
const btn = document.querySelector("btn");

heading.addEventListener("click", function (event) {
  console.log(event.currentTarget);
});

btn.addEventListener("click", function (event) {
  console.log(event.currentTarget);
});
