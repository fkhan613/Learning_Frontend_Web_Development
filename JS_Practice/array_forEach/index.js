let students = ["farhan", "nathan", "spongbob", "patrick", "jimmy", "joe"];
console.log("Before capitalizing names:");
students.forEach(display);
console.log("\n")
console.log("After capitalizing names:");
students.forEach(capitalize);
students.forEach(display);
console.log("\n");


function capitalize(element, index, array) {
  array[index] = element[0].toUpperCase() + element.slice(1);
}

function display(element){
    console.log(element);
}