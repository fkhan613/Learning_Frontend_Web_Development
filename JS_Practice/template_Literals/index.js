let userName = "Farhan";
let numItems = 3;
let total = 75;

// console.log(
//   `Hello ${userName}, you have ${numItems} items in your cart, for a total of $${total}.`
// );

let text = `Hello ${userName}.
You have ${numItems} items in your cart, for a total of $${total}.`;

// console.log(text);
document.getElementById("myLabel").innerHTML = text;
