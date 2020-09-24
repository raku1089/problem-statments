// check two strings are Anagram or not ;
// example
//anagram('rail safety','fairy tails') --> True
//anagram('rail! safety!','fairy tails') --> True
//anagram('Hi There','Bye There') --> True

// Approach 1;
const buildCharMap = (str) => {
  const charObject = {};

  // regex to remove all non charecters
  //str.replace(/[^\w]/g,'')
  for (let ch of str.replace(/[^\w]/g, "").toLowerCase()) {
    charObject[ch] = charObject[ch] + 1 || 1;
  }
  return charObject;
};

const anagram = (stringA, stringB) => {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }
  for (let ch in aCharMap) {
    if (aCharMap[ch] !== bCharMap[ch]) {
      return false;
    }
  }
  return true;
};

anagram("rail safety", "fairy tails");

// Approach 2

const cleanString = (str) =>
  str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
const anagram1 = (stringA, stringB) => {
  return cleanString(stringA) === cleanString(stringB);
};
