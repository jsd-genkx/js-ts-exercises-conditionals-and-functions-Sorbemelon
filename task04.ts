// TODO-04: Write if/else if to check and print:
// Divisible by both 3 and 5 → "FizzBuzz"
// Divisible by only 3 → "Fizz"
// Divisible by only 5 → "Buzz"
// Otherwise → "Not divisible by 3 or 5"

const num = 42;

if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
} else if (num % 3 === 0) {
    console.log("Fizz");
} else if (num % 5 === 0) {
    console.log("Buzz");
} else {
    console.log("Not divisible by 3 or 5");
}

// TODO BONUS: Rewrite with if
FizzBuzz: {
    if (num % 3 === 0) {
        if (num % 5 === 0) {
            console.log("FizzBuzz");
            break FizzBuzz;
        }
        console.log("Fizz");
        break FizzBuzz;
    }
    if (num % 5 === 0) {
        console.log("Buzz");
        break FizzBuzz;
    }
    console.log("Not divisible by 3 or 5");
}