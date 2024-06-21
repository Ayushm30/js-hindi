const user = {
    username : "hitesh",
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()