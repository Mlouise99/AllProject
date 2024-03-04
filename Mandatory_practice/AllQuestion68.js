// 1. Function to return the sum of two numbers
function sum(num1, num2) {
    return num1 + num2;
}
console.log("Sum:", sum(5, 3));

// 2. Function to return the product of two numbers
function product(num1, num2) {
    return num1 * num2;
}
console.log("Product:", product(5, 3));

// 3. Function to return the difference of two numbers
function difference(num1, num2) {
    return num1 - num2;
}
console.log("Difference:", difference(5, 3));

// 4. Function to return the division of two numbers
function division(num1, num2) {

    if (num2 !== 0) {
        return num1 / num2;
    } else {
        return "Cannot divide by zero";
    }
}
console.log("Division:", division(5, 3));

// 5. Function to return the sum of all elements in an array
function arraySum(arr) {
    return arr.reduce((total, current) => total + current, 0);
}
console.log("Array Sum:", arraySum([1, 2, 3, 4, 5]));

// 6. Function to return the greatest value in an array
function maxArrayValue(arr) {
    return Math.max(...arr);
}
console.log("Max Array Value:", maxArrayValue([1, 2, 3, 4, 5]));

// 7. Function to return the smallest value in an array
function minArrayValue(arr) {
    return Math.min(...arr);
}

console.log("Min Array Value:", minArrayValue([1, 2, 3, 4, 5]));

// 8. Function to return the average of numbers in an array
function averageArray(arr) {
    const sum = arraySum(arr);
    return sum / arr.length;
}
console.log("Average Array:", averageArray([1, 2, 3, 4, 5]));

// 9. Function to combine two arrays into one
function combineArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
const arrange = ['a', 'b', 'c', 'd'];
const arrayTo = ['e', 'f', 'g'];
console.log("Combined Arrays:", combineArrays(arrange, arrayTo));
// 10. Function to display a pattern
function displayPattern1(rows, cols) {
    for (let i = 0; i < rows; i++) {
        let pattern = "";
        for (let j = 0; j < cols; j++) {
            pattern += "* ";
        }
        console.log(pattern);
    }
}
console.log("Pattern 1:");
displayPattern1(4, 5);

// 11. Function to display a pattern
function displayPattern2(rows) {
    for (let i = rows; i > 0; i--) {
        let pattern = "";
        for (let j = 0; j < i; j++) {
            pattern += "1 ";
        }
        console.log(pattern);
    }
}
console.log("\nPattern 2:");
displayPattern2(4);

// 12. Function to display a pattern
function displayPattern3(rows, cols) {
    for (let i = 0; i < rows; i++) {
        let pattern = "";
        for (let j = 0; j < cols; j++) {
            if (j >= rows - i) {
                pattern += "1 ";
            } else {
                pattern += "0 ";
            }
        }
        console.log(pattern);
    }
}
console.log("\nPattern 3:");
displayPattern3(4, 4);

// 13. Function to display a pattern
function displayPattern4(rows, cols) {
    for (let i = 0; i < rows; i++) {
        let pattern = "";
        for (let j = 0; j < cols; j++) {
            if (i === 0 || j === 0 || i === rows - 1 || j === cols - 1) {
                pattern += "1 ";
            } else {
                pattern += "0 ";
            }
        }
        console.log(pattern);
    }
}
console.log("\nPattern 4:");
displayPattern4(5, 5);

// 14. Function to display a pattern
function displayPattern5(rows) {
    for (let i = rows - 1; i >= 0; i--) {
        let pattern = "";
        for (let j = 0; j < rows; j++) {
            if (j === i) {
                pattern += "1 ";
            } else {
                pattern += "  ";
            }
        }
        console.log(pattern);
    }
}
console.log("\nPattern 5:");
displayPattern5(4);

// 15. Function to reverse the order of elements in an array
function reverseArray(arr) {
    return arr.reverse();
}
console.log("\nReversed Array:", reverseArray([1, 3, 4, 3, 7, 8, 0, 12, 19]));

// 16. Function to sort and arrange elements of an array
function sortAndArrangeArray(arr) {
    const sortedArray = [...arr].sort((a, b) => a - b);
    const firstThree = sortedArray.slice(0, 3);
    const lastThree = sortedArray.slice(-3);
    return [...firstThree, ...sortedArray, ...lastThree];
}
console.log("\nSorted and Arranged Array:", sortAndArrangeArray([3, 4, 8, 2, 1, 2, 2, 6, 3, 4]));

// 17. Function to determine the age classification of people
function ageClassification(age) {
    if (age >= 0 && age <= 12) {
        return "MIMICRY";
    } else if (age >= 13 && age <= 19) {
        return "SELF-DISCOVERY";
    } else if (age >= 20 && age <= 45) {
        return "COMMITMENT";
    } else {
        return "LEGACY";
    }
}

console.log("\nAge Classification:", ageClassification(25));

// 18. Function to calculate BMI and return classification
function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obesity";
    }
}

console.log("\nBMI Classification:", calculateBMI(70, 1.75));

// 19. Function to count characters in a string excluding spaces
function countCharacters(str) {
    return str.replace(/\s/g, "").length;
}
console.log("Number of characters:", countCharacters("Hello World"));

// 20. Function to display an even number between 1 and 100
function displayEvenNumbers() {
    for (let i = 2; i <= 100; i += 2) {
        console.log(i);
    }
}

console.log("Even numbers between 1 and 100:");
displayEvenNumbers();

// 21. Function to calculate the square of a number
function squareNumber(num) {
    return num * num;
}
console.log("Square of 5:", squareNumber(5));
// 22. Function to check if a number is even
function isEven(num) {
    return num % 2 === 0;
}
console.log("Is 6 even?", isEven(6));
// 23. Function to check if a number is odd
function isOdd(num) {
    return num % 2 !== 0;
}
console.log("Is 7 odd?", isOdd(7));
// 24. Function to return the maximum of two numbers
function maximum(num1, num2) {
    return Math.max(num1, num2);
}

console.log("Maximum of 5 and 8:", maximum(5, 8));

// 25. Function to return the minimum of two numbers
function minimum(num1, num2) {
    return Math.min(num1, num2);
}

console.log("Minimum of 3 and 9:", minimum(3, 9));
// 26. Function to calculate the factorial of a number
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log("Factorial of 5:", factorial(5));
// 27. Function to reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log("Reverse of 'Hello':", reverseString("Hello"));
// 28. Function to check if a string is a palindrome
function isPalindrome(str) {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}
console.log("Is 'area' a palindrome?", isPalindrome("area"));

// 29. Function to display odd numbers between 1 and 100
function displayOddNumbers() {
    for (let i = 1; i <= 100; i += 2) {
        console.log(i);
    }
}

console.log("Odd numbers between 1 and 100:");
displayOddNumbers();

// 30. Function to display multiples of 5
function displayMultiplesOf5() {
    for (let i = 5; i <= 100; i += 5) {
        console.log(i);
    }
}
console.log("Multiples of 5 between 1 and 100:");
displayMultiplesOf5();

// 31. Function to return the square root of a given number
function squareRoot(num) {
    return Math.sqrt(num);
}
console.log("Square root of 16:", squareRoot(16));
// 32. Function to return the bigger number of two given numbers
function biggerNumber(num1, num2) {
    return Math.max(num1, num2);
}
console.log("Bigger number between 8 and 12:", biggerNumber(8, 12));
// 33. Function to change a string into capital letters
function toUpperCase(str) {
    return str.toUpperCase();
}
console.log("String 'hello' in uppercase:", toUpperCase("hello"));
// 34. Function to modify a string at a specific position with a given character
function stringModifier(str, position, char) {
    const modifiedStr = str.substring(0, position - 1) + char + str.substring(position);
    return modifiedStr;
}

console.log("Modified string:", stringModifier("hello", 3, "x"));

// 35. Function to count the number of vowels in a string
function countVowels(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}


console.log("Number of vowels in 'hello':", countVowels("hello"));

// 36. Function to count the number of consonants in a string
function countConsonants(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (!vowels.includes(char) && char.match(/[a-z]/i)) {
            count++;
        }
    }
    return count;
}
console.log("Number of consonants in 'hello':", countConsonants("hello"));

// 37. Function to find the index of a given character in a string
function findIndexOfChar(str, char) {
    return str.indexOf(char);
}

console.log("Index of 'o' in 'hello':", findIndexOfChar("hello", "o"));
// 38. Function to remove duplicates from an array
function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}
console.log("Array with duplicates removed:", removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
// 39. Function to check if a given value is present in an array
function isValuePresent(arr, value) {
    return arr.includes(value);
}
console.log("Is 3 present in [1, 2, 3, 4, 5]?", isValuePresent([1, 2, 3, 4, 5], 3))
// 40. Function to square each element of an array
function squareElements(arr) {
    return arr.map(num => num * num);
}
console.log("Square of each element in [1, 2, 3, 4]:", squareElements([1, 2, 3, 4]));
// 41. Function to return the first n elements of an array
function firstNElements(arr, n) {
    return arr.slice(0, n);
}
console.log("First 3 elements of [1, 2, 3, 4, 5]:", firstNElements([1, 2, 3, 4, 5], 3));
// 42. Function to remove the last element from an array
function removeLastElement(arr) {
    arr.pop();
    return arr;
}
console.log("Array with last element removed:", removeLastElement([1, 2, 3, 4, 5]));
// 43. Function to sort an array of numbers in ascending order
function sortAscending(arr) {
    return arr.sort((a, b) => a - b);
}
console.log("Sorted array:", sortAscending([3, 1, 4, 1, 5, 9]));
// 44. Function to check if all elements in an array are positive
function areAllPositive(arr) {
    return arr.every(num => num > 0);
}
console.log("Are all elements in [1, 2, 3] positive?", areAllPositive([1, 2, 3]));
// 45. Function to calculate the sum of even numbers in an array
function sumOfEvenNumbers(arr) {
    return arr.reduce((sum, num) => (num % 2 === 0) ? sum + num : sum, 0);
}
console.log("Sum of even numbers in [1, 2, 3, 4, 5]:", sumOfEvenNumbers([1, 2, 3, 4, 5]));
// 46. Function to convert an array of strings to uppercase
function arrayToUpperCase(arr) {
    return arr.map(str => str.toUpperCase());
}
console.log("Array of strings in uppercase:", arrayToUpperCase(["hello", "world"]));
// 47. Function to generate a random number between a given range
function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random number between 1 and 10:", randomInRange(1, 10));
// 48. Function to return the reverse of an array
function reverseArray(arr) {
    return arr.reverse();
}
console.log("Reverse of [1, 2, 3, 4, 5]:", reverseArray([1, 2, 3, 4, 5]));
// 49. Function to calculate the Fibonacci sequence up to n numbers
function fibonacciSequence(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}
console.log("Fibonacci sequence up to 8 numbers:", fibonacciSequence(8));
// 50. Function to check if an array is sorted in ascending order
function isArraySorted(arr) {
    return arr.every((num, index) => index === 0 || num >= arr[index - 1]);
}

console.log("Is [1, 2, 3, 4, 5] sorted?", isArraySorted([1, 2, 3, 4, 5]));
// 51. Function to filter out negative numbers from an array
function filterNegativeNumbers(arr) {
    return arr.filter(num => num >= 0);
}
console.log(" Filtered array:", filterNegativeNumbers([-2, 3, -5, 7, -8, 10]));
// 52. Function to calculate the square root of a number
function squareRoot(num) {
    return Math.sqrt(num);
}
console.log(" Square root of 25:", squareRoot(25));

// 53. Function to find the median of an array of numbers
function findMedian(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    const middle = Math.floor(sortedArr.length / 2);
    if (sortedArr.length % 2 === 0) {
        return (sortedArr[middle - 1] + sortedArr[middle]) / 2;
    } else {
        return sortedArr[middle];
    }
}
console.log(" Median of [2, 4, 6, 8, 10]:", findMedian([2, 4, 6, 8, 10]));

// 54. Function to capitalize the first letter of each word in a sentence
function capitalizeFirstLetter(sentence) {
    return sentence.replace(/\b\w/g, char => char.toUpperCase());
}

console.log(" Capitalized sentence:", capitalizeFirstLetter("hello world"));

// 55. Function to check if a given year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(" Is 2024 a leap year?", isLeapYear(2024));

// 56. Function to find the intersection of two arrays
function findIntersection(arr1, arr2) {
    return arr1.filter(num => arr2.includes(num));
}

console.log(" Intersection of arrays:", findIntersection([1, 2, 3, 4], [3, 4, 5, 6]));

// 57. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log("Is 7 a prime number?", isPrime(7));

// 58. Function to return the power of a number (base, exponent)
function power(base, exponent) {
    return Math.pow(base, exponent);
}

console.log(" Power of 2 to the 3rd:", power(2, 3));

// 59. Function to calculate the area of a rectangle
function calculateRectangleArea(length, width) {
    return length * width;
}

console.log(" Area of a rectangle with length 5 and width 3:", calculateRectangleArea(5, 3));

// 60. Function to calculate the perimeter of a rectangle
function calculateRectanglePerimeter(length, width) {
    return 2 * (length + width);
}

console.log("Perimeter of a rectangle with length 5 and width 3:", calculateRectanglePerimeter(5, 3));

// 61. Function to check if a given string contains only digits
function containsOnlyDigits(str) {
    return /^\d+$/.test(str);
}

console.log("Does '12345' contain only digits?", containsOnlyDigits("12345"));

// 62. Function to count the number of words in a sentence
function countWords(sentence) {
    return sentence.split(" ").filter(word => word !== "").length;
}


console.log(" Number of words in 'Hello world':", countWords("Hello world"));

// 63. Function to convert a temperature from Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
console.log("63. Converted temperature from Celsius to Fahrenheit:", celsiusToFahrenheit(25));

// 64. Function to generate a pyramid pattern of a given height
function generatePyramid(height) {
    for (let i = 1; i <= height; i++) {
        console.log(" ".repeat(height - i) + "* ".repeat(i));
    }
}
console.log(" Pyramid pattern:");
generatePyramid(5);

// 65. Switch Case:

// a. Calculator Switch
function calculatorSwitch(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}
console.log(" Calculator switch:", calculatorSwitch(5, 3, '+'));

// b. Day of Week
function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid day number";
    }
}
console.log(" Day of week:", getDayOfWeek(7));
// c. Grade System
function gradeSystem(score) {
    switch (true) {
        case (score >= 90):
            return "A";
        case (score >= 80):
            return "B";
        case (score >= 70):
            return "C";
        case (score >= 60):
            return "D";
        default:
            return "F";
    }
}

console.log(" Grade for score 85:", gradeSystem(85));
// d. Traffic Light
function trafficLight(colorNumber) {
    switch (colorNumber) {
        case 1:
            return "Red";
        case 2:
            return "Yellow";
        case 3:
            return "Green";
        default:
            return "Invalid color number";
    }
}
console.log(" Traffic light:", trafficLight(2));
// e. Month Name
function getMonthName(monthNumber) {
    switch (monthNumber) {
        case 1:
            return "January";
        case 2:
            return "February";
        case 3:
            return "March";
        case 4:
            return "April";
        case 5:
            return "May";
        case 6:
            return "June";
        case 7:
            return "July";
        case 8:
            return "August";
        case 9:
            return "September";
        case 10:
            return "October";
        case 11:
            return "November";
        case 12:
            return "December";
        default:
            return "Invalid month number";
    }
}
console.log(" Month name:", getMonthName(9));
// f. Simple Menu
function simpleMenu(option) {
    switch (option) {
        case 1:
            return "Option 1 selected";
        case 2:
            return "Option 2 selected";
        case 3:
            return "Option 3 selected";
        default:
            return "Invalid option";
    }
}

console.log(" Simple menu:", simpleMenu(3));
//g . cuurency coverter
function currencyConverter(amount, sourceCurrency, targetCurrency) {
    let result;

    switch (sourceCurrency.toLowerCase()) {
        case 'usd':
            switch (targetCurrency.toLowerCase()) {
                case 'usd':
                    result = amount;
                    break;
                case 'eur':
                    result = amount * 0.82; // 1 USD = 0.82 EUR
                    break;
                case 'gbp':
                    result = amount * 0.72; // 1 USD = 0.72 GBP
                    break;
                default:
                    result = 'Invalid target currency';
            }
            break;
        case 'eur':
            switch (targetCurrency.toLowerCase()) {
                case 'usd':
                    result = amount * 1.22; 
                    break;
                case 'eur':
                    result = amount;
                    break;
                case 'gbp':
                    result = amount * 0.88; 
                    break;
                default:
                    result = 'Invalid target currency';
            }
            break;
        case 'gbp':
            switch (targetCurrency.toLowerCase()) {
                case 'usd':
                    result = amount * 1.39; 
                    break;
                case 'eur':
                    result = amount * 1.14; 
                    break;
                case 'gbp':
                    result = amount;
                    break;
                default:
                    result = 'Invalid target currency';
            }
            break;
        default:
            result = 'Invalid source currency';
    }

    return result;
}
const amount = 100;
const sourceCurrency = 'USD';
const targetCurrency = 'EUR';
const convertedAmount = currencyConverter(amount, sourceCurrency, targetCurrency);
console.log(`${amount} ${sourceCurrency} is equal to ${convertedAmount} ${targetCurrency}`);

// h.	Shape Area

function calculateShapeArea(shape, dimensions) {
    let area;

    switch (shape.toLowerCase()) {
        case 'circle':
            area = Math.PI * Math.pow(dimensions.radius, 2);
            break;
        case 'square':
            area = Math.pow(dimensions.side, 2);
            break;
        case 'triangle':
            area = (dimensions.base * dimensions.height) / 2;
            break;
        default:
            area = 'Invalid shape';
    }

    return area;
}

const circleArea = calculateShapeArea('circle', { radius: 5 });
console.log(`Area of the circle is: ${circleArea}`);

const squareArea = calculateShapeArea('square', { side: 4 });
console.log(`Area of the square is: ${squareArea}`);

const triangleArea = calculateShapeArea('triangle', { base: 6, height: 3 });
console.log(`Area of the triangle is: ${triangleArea}`);
// I i.	Season Detector
function getSeason(month) {
    let season;

    switch (month) {
        case 1:
        case 2:
        case 12:
            season = 'Winter';
            break;
        case 3:
        case 4:
        case 5:
            season = 'Spring';
            break;
        case 6:
        case 7:
        case 8:
            season = 'Summer';
            break;
        case 9:
        case 10:
        case 11:
            season = 'Fall';
            break;
        default:
            season = 'Invalid month';
    }

    return season;
}

const month = 6;
const season = getSeason(month);
console.log(`The season for month ${month} is ${season}`);

// 66a Array sum
function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const number = [1, 2, 3, 4, 5];
console.log("Sum:", arraySum(number));

//66b even number
function printEvenNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
        }
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Even numbers:");
printEvenNumbers(numbers);

//66c Array  reverse
function reverseArray(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

const num = [1, 2, 3, 4, 5];
console.log("Reversed array:", reverseArray(num));

//66d Array Filter
function filterArray(arr) {
    const filtered = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 10) {
            filtered.push(arr[i]);
        }
    }
    return filtered;
}

const element = [5, 10, 15, 3, 20];
console.log("Filtered array:", filterArray(element));

//66e Array Average

function arrayAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
const n = [1, 2, 3, 4, 5];
console.log("Average:", arrayAverage(n));
//66f Array Search
function arraySearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1; 
}

const number1 = [1, 2, 3, 4, 5];
const target = 3;
console.log("Index of", target, "is", arraySearch(number1, target));

//66g  Duplicate Elements
function findDuplicates(arr) {
    const duplicates = {};
    for (let i = 0; i < arr.length; i++) {
        if (duplicates[arr[i]] === undefined) {
            duplicates[arr[i]] = 1;
        } else {
            console.log(arr[i]);
            duplicates[arr[i]]++;
        }
    }
}


const number2 = [1, 2, 2, 3, 4, 4, 4, 5];
console.log("Duplicate elements:");
findDuplicates(number2);

//66h  Array Sorting
function bubbleSort(arr) {
    const length = arr.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}


const number3 = [5, 3, 8, 1, 2];
console.log("Sorted array:", bubbleSort(number3));





























