const arr = [2,3,4,5,6]
// console.log(arr);

const arr2 = new Array(4,5,6,"atif", true)
// console.log(arr2.length);
// console.log(arr2[3]);
arr.push(7)
arr.push(8)
arr.pop()
arr.unshift(1)
arr.shift()
// console.log(arr.includes(5));
// console.log(arr.indexOf(5));
// const newarr = [0,1,2,3,4,5,6]
// console.log(arr);
// console.log(newarr.join());
const arr3 = [1,2,3,4,5,6]
const newarr = arr3.slice(1,3)
console.log("A", arr3)
console.log(newarr)

const mynr = arr3.splice(1,3)
console.log("B",  arr3)
console.log(mynr);


