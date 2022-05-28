//this prgram will iterate through a range of numbers and print fizz if the number is divisible by 3, buzz if the number is divisible by 5, and fizzbuzz if the number is divisible by both 3 and 5.

for (let i = 1; i <= Math.random() * 500 + 1; i++) {
  i % 3 === 0 && i % 5 === 0
    ? console.log(i + ": FizzBuzz")
    : i % 3 === 0
    ? console.log(i + ": Fizz")
    : i % 5 === 0
    ? console.log(i + ": Buzz")
    : console.log(i + ": Nothing");
}
