// Print
//  Fizz: multiple of 3
// Buzz: multiple of 5
// FizzBUZZ: multiple of 3 and 5
// numbers: does'n match above

const fizzBuzz = (num) => {
  for (let i = 1; i <= num; i++) {
    const isFizz = i % 3 === 0;
    const isBuzz = i % 5 === 0;
    const toBePrinted = isFizz
      ? isBuzz
        ? "FizzBuzz"
        : "Fizz"
      : isBuzz
      ? "Buzz"
      : i;
    console.log(toBePrinted);
  }
};
// fizzBuzz(100)
