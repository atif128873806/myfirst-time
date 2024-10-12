// const usertinder = new Object()

const usertinder = {}

usertinder.name = "atif"
usertinder.id = "123abc"
usertinder.isLoggedIn = false

// console.log(usertinder);

const tleUser = {
    email: "atif@gmail.com",
    fullname: {
        userfullname: {
            firstname: "atif",
            lastname: "mumtaz"
        }
    }
}
// console.log(tleUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "d", 4: "c"}
// const obj3 = Object.assign(obj1, obj2)
// console.log(obj3);

const obj3 = {...obj1,...obj2}
console.log(obj3);
console.log(Object.keys(usertinder));
console.log(Object.values(usertinder));


