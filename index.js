//question:1(return sum of two numbers)
function calculateSum(num1, num2) {
  return num1 + num2;
}
console.log('sum:' + calculateSum(3, 5));

//question:2(if even return true,otherwise false)
function isEven(number) {
  return number % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(7));

//question:3(return the largest number of the array)
function findMax(numbers) {
  if (numbers.length === 0) {
    throw new Error(
      'The array is empty. Please provide an array with at least one number.'
    );
  }

  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}
let numbers = [34, 67, 23, 89, 12, 98, 45];
console.log('largest number:' + findMax(numbers));

//question:4(return the reversed string)
function reverseString(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string.');
  }

  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

let originalString = 'world';
console.log('reversed string is: ' + reverseString(originalString));

//question:5(return the array of odd numbers)
function filterOddNumbers(numberss) {
  if (!Array.isArray(numberss)) {
    throw new Error('Input must be an array of numbers.');
  }

  let oddNumbers = [];

  for (let i = 0; i < numberss.length; i++) {
    if (numberss[i] % 2 !== 0) {
      oddNumbers.push(numberss[i]);
    }
  }

  return oddNumbers;
}
let numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers = filterOddNumbers(numberss);
console.log(oddNumbers);

//question:6(return the sum of the array numbers)
function sumArray(numbersss) {
  if (!Array.isArray(numbersss)) {
    throw new Error('Input must be an array of numbers.');
  }

  let sum = 0;

  for (let i = 0; i < numbersss.length; i++) {
    sum += numbersss[i];
  }

  return sum;
}
let numbersss = [1, 2, 3, 4, 5];
console.log('sum:' + sumArray(numbersss));

//question:7(return the sorted array)
function sortArray(numberssss) {
  if (!Array.isArray(numberssss)) {
    throw new Error('Input must be an array of numbers.');
  }

  let sortedArray = numberssss.slice().sort((a, b) => a - b);

  return sortedArray;
}
let numberssss = [9, 5, 1, 7, 2, 4, 6, 3, 10, 8];
console.log(sortArray(numberssss));

//question:8(return the capitalized first letter string)
function capitalizeFirstLetter(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string.');
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(
  'capitalized first letter string is: ' + capitalizeFirstLetter('hello')
);
