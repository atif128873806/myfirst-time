const user = {
    name: "Atif",
    price: 1000,
    welcomeMessage: function(){
        console.log(`${this.name},welcome to our website`);
        // console.log(this);
        
    }
}
// user.welcomeMessage()
user.name="asad"
// user.welcomeMessage()
// syntax  of arrow function
// const chai = (num1, num2) =>{
//     return num1+num2
// }
// const chai = (num1, num2) =>  num1+num2
const chai = (num1, num2) =>  (num1+num2)

console.log(`The sum of two number is=${chai(6,8)}`)

