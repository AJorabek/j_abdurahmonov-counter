let add = document.getElementById("add");
let min = document.getElementById("min");
let count = document.getElementById("count");
let del=document.getElementById('del')
let bg = prompt("enter body's background color:");
document.body.style.background = bg;
let counter = 0;
add.addEventListener("click", () => {
  counter++;
  count.textContent = `Counter:${counter}`;
});
min.addEventListener("click", () => {
  counter--;
  count.textContent = `Counter:${counter}`;
});