let options = [8,4,5,3,3,6];

let combinations = options.reduce((total, number) => total *= number);

console.log(`Total combinations: ${combinations}`);