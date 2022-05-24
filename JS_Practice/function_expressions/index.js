let count = 0;

document.getElementById("increaseBtn").onclick = function () {
  count++;
  document.getElementById("output").innerHTML = count;
};

document.getElementById("decreaseBtn").onclick = function () {
  if (count === 0) {
    return;
  }
    count--;
  document.getElementById("output").innerHTML = count;
};
