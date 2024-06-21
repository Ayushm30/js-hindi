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

const course = {
    coursename : "js javscript",
    price : "99",
    cousreInstructor :"hitesh"
}

const {cousreInstructor} = course

console.log(cousreInstructor );

//Deconstructor
//const navbar ({company}) => {
//}
//navbar(company = "hitesh")  


//API

//{
//    "name" : "ayush",
//    "coursename" : "js in hindi",
//    "course" : "free"
//}