/*
Find PI to the Nth Digit -
Enter a number and have the program generate PI up to that many decimal places.
Keep a limit to how far the program will go.

Using the Gauss-Legendre algorithm.
*/

function calculatePi(precision) {
    const PI = Math.PI;
    let calculatedPi = 0;

    let a = 1;
    let b = 1/Math.sqrt(2);
    let t = 1/4;
    let p = 1;

    // Limit the precision.
    if (precision > 14) {
        precision = 14;
    }

    while (true) {
        const aNext = (a + b) / 2;
        const bNext = Math.sqrt(a * b);
        const tNext = t - p * (a - aNext) * (a - aNext);
        const pNext = 2 * p;

        a = aNext;
        b = bNext;
        t = tNext;
        p = pNext;

        calculatedPi = ((a + b) * (a + b))/ (4 * t);
        if ((calculatedPi.toFixed(precision) - PI.toFixed(precision)) == 0) {
            break;
        }
    }

    return calculatedPi.toFixed(precision);
}

const precision = 20;
console.log(`Pi rounded to ${precision} decimal places: ` + calculatePi(precision));