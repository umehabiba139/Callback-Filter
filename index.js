function filterNumbers(numbers, filterCallback) {
    const filteredNumbers = numbers.filter(filterCallback);
    return filteredNumbers;
}

module.exports = {
    filterNumbers
};
