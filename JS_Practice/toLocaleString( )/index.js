let myNum = 44;

//DIFFERENT LANGUAGES

// myNum = myNum.toLocaleString("en-US");
// console.log(myNum);

// myNum = myNum.toLocaleString("hi-IN");
// console.log(myNum);

// myNum = myNum.toLocaleString("fr-FR");
// console.log(myNum);

// myNum = myNum.toLocaleString("de-DE");
// console.log(myNum);

//DIFFERENT CURRENCIES

//myNum = myNum.toLocaleString("en-US", { style: "currency", currency: "USD" });
//myNum = myNum.toLocaleString("hi-IN", { style: "currency", currency: "INR" });
//myNum = myNum.toLocaleString("de-DE", { style: "currency", currency: "EUR" });

//PERCENTAGE
//myNum = myNum.toLocaleString(undefined, { style: "percent" });

//UNIT OF MEASURMENT
myNum = myNum.toLocaleString(undefined, {
  style: "unit",
  unit: "celsius",
});

console.log(myNum);
