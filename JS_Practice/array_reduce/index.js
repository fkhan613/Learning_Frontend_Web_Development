let prices = [5, 10, 80, 50, 69, 89];
let total = prices.reduce(checkOut);

console.log(`Total: $${total}`);

function checkOut(total, element){
    return total + element;
}