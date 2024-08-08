/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

/*
What is meant by snake case?
Snake case is a way of writing phrases without spaces, where spaces are replaced with underscores _ , and the words are typically all lower case. 
i love to write snake_case.
*/

function findLargestElement(numbers) {
    let sizeOfNumbers = numbers.length;
    let largestElement = numbers[0];
    for(let currentIndex = 0; currentIndex < sizeOfNumbers; currentIndex++){
        if(numbers[currentIndex] > largestElement){
            largestElement = numbers[currentIndex];
        }
    }
    return largestElement;
}

export default findLargestElement;