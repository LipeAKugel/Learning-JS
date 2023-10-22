let a = 1;
let b = 2;
let c = 9;
let d = 8;
let e = 7;

console.log(sum(a,b,c,d,e));

function sum(...numbers) {
    total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}