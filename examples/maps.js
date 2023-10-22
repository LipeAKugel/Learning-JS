const products = new Map([
    ["water bottle", 8],
    ["notebook", 5],
    ["pencil", 0.5],
    ["pen", 0.5],
    ["backpack", 20]
]);

//products.get("notebook");
//products.set("eraser", 0.2);
//products.delete("pen");
//console.log(products.has("notebook"));

console.log(products);
products.forEach((value, key) => console.log(`${key} $${value}`));