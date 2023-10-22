user1 = {
    userName: "Felipe",
    email: "felipearaujodff@gmail.com",
    age: 17,

    login : function() {
        console.log(`${this.userName} just logged in!`);
    },
    logout : function() {
        console.log(`${this.userName} logged out!`);
    }
}

user1.login();
user1.logout();