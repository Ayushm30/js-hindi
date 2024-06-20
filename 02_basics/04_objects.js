//const tinderUser = new Object()   singleton object

const tinderUser = {} //non - singletonn object

tinderUser.name = "harry"
tinderUser.id = "abc123"
tinderUser.isLoggedin = false

const regularUser = {
    email:  "someone@gmail.com",
    fullname: {
        firstname : "ayush",
        laatname : "chaudhary"
    }
}

console.log(tinderUser);