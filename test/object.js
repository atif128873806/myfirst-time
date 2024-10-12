
const sym =Symbol ("key1")




const user = {
    name: "atif",
    "full namme": "atif mumtaz",
    [sym]: "key1",
    age: 18,
    email: "atifmumtaz455@gmai.com",
    location: "quetta",
    isLoogedIn: false,
    lastDayLoing: "Sunday",
}
 
// console.log(user.name);
// console.log(user["full namme"]);
// console.log(user[sym]);

user.email = "atif@gmail.com"
// Object.freeze(user)
user.email = "io"
// console.log(user);

user.greeting = function(){
    console.log("hy js user");
}
user.greeting2 = function(){
    console.log(`hy js user, ${this.name}`);
    
}
console.log(user.greeting());
console.log(user.greeting2());


