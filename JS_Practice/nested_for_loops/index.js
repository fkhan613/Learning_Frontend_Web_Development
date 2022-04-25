let rows = window.prompt("Enter the number of rows");
let cols = window.prompt("Enter the number of columns");

for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= cols; j++) {
    document.getElementById("myRect").innerHTML += "●";
  }

  document.getElementById("myRect").innerHTML += "<br>";
}
