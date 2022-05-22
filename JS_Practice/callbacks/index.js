sum(50, 19, displayConsole, displayDOM);

function sum(x, y, callback, DOM) {
  let result = x + y;
  callback(result);
  DOM(result);
}

function displayConsole(output) {
  console.log(output);
}

function displayDOM(output) {
  document.getElementById("output").innerHTML = output;
}
