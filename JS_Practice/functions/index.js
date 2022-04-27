var userAge = 0;
var userName = "UNIDENTIFIED";
var isStudent = "";

startProgram();

function startProgram() {
  userName = getName();
  userAge = getAge();
  output();
}

function getAge() {
  let age = Number(window.prompt("What is your age?"));
  age <= 18
    ? (isStudent = "you are a student!")
    : (isStudent = "you are not a student!");

  return age;
}

function getName() {
  let name = window.prompt("What is your name?");
  return name;
}

function output() {
  if (userName == null || isNaN(userAge)) {
    window.alert("Error, you have entered a null value.");
    startProgram();
  }

  document.getElementById("output").innerHTML =
    "Hello " +
    userName +
    "! You are " +
    userAge +
    " years old and " +
    isStudent;
}
