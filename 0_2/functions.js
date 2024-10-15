function name() {
  console.log("A");
  console.log("T");
  console.log("I");
  console.log("F");
}

// name()

// function addTwoNumbers(a, b) {
//   console.log(a + b);
// }
// addTwoNumbers(5,5)

function addTwoNumbers(a,b){
    let result = a+b
    return result
}
const result = addTwoNumbers(6,6)
// console.log("your result=",result);



function userMessage(username){
    if(username === undefined){
        console.log("Please enter the username");
        return
    }
    return `${username} just logged in`
}
console.log(userMessage());

