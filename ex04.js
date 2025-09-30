// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".

function mostFrequentChar(str) {
  const counter = {};
  for (let i = 0; i < str.length; i++) {
    counter[str[i]] = (counter[str[i]] || 0) + 1;
  }

  let maxCount = 0;
  let maxChar = "";
  for (let char in counter) {
    if (counter[char] > maxCount) {
      maxCount = counter[char];
      maxChar = char;
    }
  }
  return maxChar;
}

console.log(mostFrequentChar("javascript")); // Expected output: "a"
