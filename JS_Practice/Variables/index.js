let firstName = "Farhan";
let age = 17;
let isStudent = true;

console.log(firstName + " is " + age + " years old");
console.log("Is student: " + isStudent);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Are you a student?: " + isStudent;
