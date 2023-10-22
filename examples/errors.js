try{
    const prompt = require("prompt-sync")();

    let x = prompt("Enter a number: ");
    x = Number(x);

    if (isNaN(x)) throw "Not a number";
    if (x == "") throw "Empty";

    console.log(`${x} is a number`);
} catch(error) {
    console.log(error);
} finally {
    console.log("This always executes");
}