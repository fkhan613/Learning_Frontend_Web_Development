let arr = [];
let string;

for(let i = 0; i < 100; i++) {
    arr.push(Math.round(Math.random() *1000 + 1));
}

console.log("array before sorting");
console.log(arr.toString() + "\n");
console.log("array after sorting");
arr.sort();
console.log(arr.toString() + "\n");
console.log("array after reversing");
arr.reverse();
console.log(arr.toString() + "\n");
console.log("joining array elements in a string\n");
string = arr.join(" ");
console.log(string);
console.log("outputting a substring of numbers ");
console.log(string.substring(1, 51));