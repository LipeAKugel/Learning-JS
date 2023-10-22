let userName = "Felipe";
let numNotifications = 5;

login();

function login() {
    displayUsername();
    displayNotifications();

    function displayUsername() {
        console.log(`Welcome back, ${userName}!`);
    }

    function displayNotifications() {
        console.log(`You have ${numNotifications} new notifications!`);
    }
}



