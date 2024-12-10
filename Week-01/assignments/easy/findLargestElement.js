/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

// easy>npx jest ./tests/findLargestElement.test.js
// npx jest ./tests/anagram.test.js

function findLargestElement(numbers) {
  // assume first element can be largest element!
  let largestElement = numbers[0];
  for (let currentIndex = 1; currentIndex < numbers.length; currentIndex++) {
    if (numbers[currentIndex] > largestElement) {
      largestElement = numbers[currentIndex];
    }
  }
    return largestElement;
}

// Ran all test suites matching
module.exports = findLargestElement;
