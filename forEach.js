

names = ["felipe", "karol", "joao"];

names.forEach(capitalize);

console.log(...names);

function capitalize(element, index, array) {
    return array[index] = element[0].toUpperCase() + element.substring(1);
}