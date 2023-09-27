const sum = (a, b, display) => {
    total = a+b;
    display(total);
}

const displayConsole = (value) => {
    console.log(value);
}

sum(2,3,displayConsole);