// Exercise 11: Write a function `countWordOccurrences` that takes a string and a word,
// and returns the number of times the word appears in the string.
// Example: countWordOccurrences("hello world hello", "hello") should return 2.

function countWordOccurrences(str, word) {
  const words = str.split(" ");
  const counter = {};
  words.map((w) => (counter[w] ? counter[w]++ : (counter[w] = 1)));
  return counter[word] || 0;
}

console.log(countWordOccurrences("hello world hello", "hello")); // Expected output: 2
