// check if first string has subsequence in string 2
// iteratable

const isSubSequence = (str1, str2) => {
  let i = 0;
  let j = 0;
  if (!str1) return true;

  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
};

// console.log(isSubSequence('sing', 'string')) => true
// console.log(isSubSequence('signg', 'string')) => false

// using recursion

const isSubSequence = (str1, str2) => {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str1[0] === str2[0]) {
    return isSubSequence(str1.slice(1), str2.slice(1));
  }
  return isSubSequence(str1, str2.slice(1));
};
// console.log(isSubSequence("hello", "hello there")); => true
// console.log(isSubSequence("heello", "hello there")); => true
