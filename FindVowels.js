// write function to return number of vowels present in string.
// example
// vowelsCount('Hi There ')=> 3
//vowelsCount('why') => 0

const vowelsCount = (str) => {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"]; // or 'aeiou'
  for (char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};

// Approch 2 useing regex

const vowelsCount2 = (str) => {
  // g don't return on first match
  // i case insensitive
  // [aeiou] match any
  const matches = str.match(/[aeiou]/gi);
  // if no match found it return null
  return matches ? matches.length : 0;
};
