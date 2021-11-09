const headings = document.getElementsByTagName("h2");

headings[0].style.color = "red";

const items = document.getElementsByTagName("li");

const betterItems = [...items];

betterItems.forEach(function (item) {
  console.log(item);
});
