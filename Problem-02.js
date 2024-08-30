// 1. Write a function to convert Celsius to Fahrenheit. The function should take a single argument, which is the temperature in Celsius.

function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }
  console.log(celsiusToFahrenheit(0)); 
  console.log(celsiusToFahrenheit(25)); 

  // 2. Write a function to check if a number is even. The function should take a single argument, which is the number to check.
  function isEven(number) {
    return number % 2 === 0;
  }
  console.log(isEven(4)); 
  console.log(isEven(7)); 
  
  // 3. Write a function to sum two numbers. The function should take two arguments, which are the numbers to sum.
  function sum(a, b) {
    return a + b;
  }
  console.log(sum(3, 4)); 
  console.log(sum(10, 20)); 
  
  // 4. Write a function to find the smallest number in an array. The function should take a single argument, which is the array to search.
  
  function findSmallestNum(arr) {
    return Math.min(...arr);
  }
  console.log(findSmallestNum([3, 5, 1, 9])); 
  console.log(findSmallestNum([-1, -5, 0, 10])); 
  
  // 5. Write a function to count the number of vowels in a string. The function should take a single argument, which is the string to search.
  function countVowels(str) {
    let vowelCount = 0;
    let vowels = "aeiouAEIOU";
    let vowel = vowels.split("");
    for (let vol of str.toLowerCase()) {
      if (vowel.includes(vol)) {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }
  console.log(countVowels("hello world")); 
  console.log(countVowels("Javascript")); 
  
  // 6. Write a function to get the first element of an array. The function should take a single argument, which is the array.
  function getFirstElement(arr) {
    return arr[0];
  }
  console.log(getFirstElement([1, 2, 3])); 
  console.log(getFirstElement(["a", "b", "c"])); 
  
  // 7. Write a function to check if an array is empty. The function should take a single argument, which is the array.
  function empty_array_check(arr) {
    return arr.length === 0;
  }
  // 8. Write a function to return the factorial of a number. The function should take a single argument, which is the number.
  function factorialize(num) {
    if (num === 0 || num === 1) {
      return 1;
    }
    return num * factorialize(num - 1);
  }
  console.log(factorialize(5)); 
  console.log(factorialize(7)); 
  
  // 9 Write a function to reverse a string. The function should take a single argument, which is the string to reverse.
  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  console.log(reverseString("hello")); 
  console.log(reverseString("world")); 
  
  // 10 Write a function to convert a string to lowercase. The function should take a single argument, which is the string to convert.
  function toLowerCase(str) {
    return str.toLowerCase();
  }
  
  console.log(toLowerCase("HELLO WORLD")); 
  console.log(toLowerCase("JavaScript")); 
  
  // 11. Write a function to find the length of a string. The function should take a single argument, which is the string.
  function stringLength(str) {
    return str.length;
  }
  
  console.log(stringLength("hello")); 
  console.log(stringLength("world")); 

  // 12  Write a function to merge two arrays. The function should take two arguments, which are the arrays to merge.
  function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
  }
  
  console.log(mergeArrays([1, 2, 3], [4, 5, 6])); 
  console.log(mergeArrays(["a", "b"], ["c", "d"])); 
  
  // 13 Write a function to get the last element of an array. The function should take a single argument, which is the array.
  function getLastElement(arr) {
    return arr[arr.length - 1];
  }
  
  console.log(getLastElement([1, 2, 3, 4])); 
  console.log(getLastElement(["a", "b", "c", "d"])); 
  
  // 14 Write a function to get the first character of a string. The function should take a single argument, which is the string.
  function getFirstCharacter(str) {
    return str[0];
  }
  
  console.log(getFirstCharacter("hello")); 
  console.log(getFirstCharacter("world")); 

  //  15  Write a function to find the sum of all elements in an array. The function should take a single argument, which is the array.
  function sumArray(arr) {
    let sum = 0;
    arr.forEach((item) => {
      sum += item
    });
    return sum
  }
  
  console.log(sumArray([1, 2, 3, 4])); 
  console.log(sumArray([-1, -2, -3, -4])); 
  console.log(sumArray([1.5, 2.5, 3.5]));