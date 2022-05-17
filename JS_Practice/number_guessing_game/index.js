const answer = Math.floor(Math.random() * 50 + 1);

document.getElementById("submit").onclick = function () {
  let guess = document.getElementById("guess").value;
  if (guess == answer) {
    alert("You got it!");
  } else if (guess < answer) {
    alert("Too low!");
  } else if (guess > answer) {
    alert("Too high!");
  }
};
