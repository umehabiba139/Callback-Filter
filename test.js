const filterModule = require('./index');

function isEven(number) {
    return number % 2 === 0;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = filterModule.filterNumbers(numbers, isEven);

console.log("Filtered even numbers:", filteredNumbers);
