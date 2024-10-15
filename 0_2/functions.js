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
// console.log(userMessage());
const user = {
    username: "atif",
    price: 299
}
function handleObject(anyobject){
    console.log(`${anyobject.username} is the course owner and its price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "asad",
    price: 500
})

const arr = [200,400,5643]
function getValue(getArray){
      return getArray[0,1]
}
// console.log(getValue(arr));
console.log(getValue([200,400]));

