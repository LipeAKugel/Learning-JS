numbers = [1,2,3,4,5,6,7,8,9,10];

evenNumbers = numbers.filter((element) => element % 2 == 0);
oddNumbers = numbers.filter((element) => element % 2 != 0);

console.log(numbers);
console.log(evenNumbers);
console.log(oddNumbers);