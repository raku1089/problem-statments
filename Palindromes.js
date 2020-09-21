// print true if string is palindrome
// example "10101", 'AAAA', 'ABBA'
// non palindromes  '1232111', 'ABCDA'
// solution: reverse should match actual passed string value.

const isPalindrome = (str) => {
  const revrsed = str.split("").reverse().join("");
  return str === revrsed;
};

// isPalindrome('1001') // true
// isPalindrome('1101') // false
