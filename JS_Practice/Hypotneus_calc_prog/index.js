let a;
let b;
let c;
/*
a = window.prompt("Enter side A");
a = Number (a);
b = window.prompt("Enter side B");
b = Number (b);
c = Math.sqrt (Math.pow(a, 2) + Math.pow(b, 2));
console.log("Side C:", c);
*/

document.getElementById("submit").onclick = function () {
  a = document.getElementById("aInput").value;
  a = Number(a);
  b = document.getElementById("bInput").value;
  b = Number(b);
  
  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

  document.getElementById("cLab").innerHTML = "Hypotneus: " + c;
}
