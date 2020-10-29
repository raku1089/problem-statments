const sameFrequencyCoounter = (num1, num2) => {
  let str1 = num1.toString();
  let str2 = num2.toString();
  let counter1 = {};
  let counter2 = {};
  if (str1.length !== str2.length) return false;

  for (let ch of str1) {
    counter1[ch] = counter1[ch] + 1 || 1;
  }
  for (let ch of str2) {
    counter2[ch] = counter2[ch] + 1 || 1;
  }

  for (let ch in counter1) {
    if (counter1[ch] !== counter2[ch]) return false;
  }
  return true;
};
//sameFrequencyCoounter(123,333) => false
// sameFrequencyCoounter(123,321) => true
