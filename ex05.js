// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.
function countConsonants(str) {
  const consonant = "bcdfghjklmnpqrstvwxyz";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (consonant.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

console.log(countConsonants("hello world")); // Expected output: 7
