function saymyname(){
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("S")
    console.log("H")
}
saymyname()

//function addtwonumber(number1,number2){
//    console.log(number1+number2)
//}
//addtwonumber(10,20)

function addtwonumber(number1,number2){
    //let result = number1 + number2
    //return result;
    return number1 + number2
}
const result = addtwonumber(3,5)
console.log("Result :",result);
addtwonumber(10,20)

function loginUserMessage(username){
    if(username === undefined ){
        console.log("please enter a usernname");
        return 
    }
    return  `${username} just logged in`
}
console.log(loginUserMessage())