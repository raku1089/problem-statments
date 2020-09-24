// Write function to accept string and capitalize first charecter of each word.
// example
// capitalize('hello there ') => 'Hello There'

const capitalize = (str) => {
  const words = [];
  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(" ");
};

// Approach 2
const capitalize1 = (str) => {
  let result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
};
