let unoCards = ["1", "2", "3", "4", "5", "6", "7", "8",
                "9", "0", "+2", "+4", "C", "B", "R"];

shuffle(unoCards);

console.log(unoCards);

function shuffle(array) {

    for (let i = 0; i < array.length; i++) {
        let randomIndex = Math.floor(Math.random() * array.length);

        let temp = array[randomIndex];
        array[randomIndex] = array[i];
        array[i] = temp;
    }

    return array;

}