const marvel_heros = ["thor", "hulk", "ironman"]
const dc_heros = ["antman", "superman", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

const  all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);


const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1,2,3,4, [5,6,7,[8,9,10]]]

const new_arr = another_array.flat(Infinity)
// console.log(new_arr);

console.log(Array.isArray("atif"))
console.log(Array.from("atif"))

let score = 400
let score2 = 500
let score3 = 600

console.log(Array.of(score, score2, score3));




