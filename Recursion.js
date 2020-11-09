// Math Power

function power(base, exponent = 0) {
  if (exponent === 0) {
    return 1;
  }

  return base * power(base, exponent - 1);
}
// console.log(power(2, 4)); => 16

// Factorial

function factorial(num = 0) {
  if (num < 0) return 0;
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}
// console.log(factorial(5))=> 120

// Product of Array

function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }

  return arr[0] * productOfArray(arr.slice(1));
}
// console.log(productOfArray([3,2,4,1])) =>24

// recursive range : Adds all number range from given till zero.

function recursiveRange(num = 0) {
  if (num === 0) return 0;

  return num + recursiveRange(num - 1);
}

// console.log(recursiveRange(10)) =>55

// fibonacci series rturn the value at that position

function fibbonacci(num) {
  if (num <= 2) return 1;
  return fibbonacci(num - 1) + fibbonacci(num - 2);
}
// console.log(fibbonacci(4)) => 3

// reverse passed string
function reverseString(str) {
  if (str.length < 2) {
    return str[0];
  }
  return reverseString(str.slice(1)) + str[0];
}

// console.log(reverseString('Rakesh kumar')) =>"ramuk hsekaR"

// check string is Palindrome or not

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) {
    return str[0] === str[1];
  }
  if (str[0] === str.slice(-1)) {
    return isPalindrome(str.slice(1, -1));
  }
  return false;
}
// console.log(isPalindrome('LOL')) => true
