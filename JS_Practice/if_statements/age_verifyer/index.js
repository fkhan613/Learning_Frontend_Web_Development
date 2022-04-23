var age;
var error = false;

do {
  age = window.prompt("Enter your age");

  if (age <= 0) {
    error = true;
    window.alert("You're not born yet!");
  } else {
    error = false;
  }
} while (error);

if (age >= 60) {
  document.write("You are eligible for the senior citizen discount");
} else if (age >= 18) {
  document.write("You are eligible for the general discount");
} else if (age < 18 && age > 0) {
  document.write("You are eligible for the child discount");
} else {
  document.write("You are not eligible for any discount");
}
