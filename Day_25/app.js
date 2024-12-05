console.log("day 25");

// rest 
function sum(...args) {
    for(i=0; i<args.length; i++){
        console.log("the nuber is: " ,args[1]);
    }

}

// use min for gives multiple argument
function min(){
    console.log(arguments);
}

// Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array.
let nums = [1,2,3,4,5,6,7,8]

const square= nums.map((num)=> num * num)
console.log(square)

const sumof = nums.reduce((el ,res)=> el+ res)
console.log(sumof)

const avg = sumof / nums.length
console.log(avg)

// Qs2. Create a new array using the map function whose each element is equal to the
// original element plus 5

const arr= nums.map((num)=> num+5)
console.log(arr)

// Qs3. Create a new array whose elements are in uppercase of words present in the
// original array.

var strings =["chair", "book", "pen", "laptop", "table"]
console.log( strings.map((strings) => strings.toUpperCase()) )

// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled

var doubleAndReturnArgs = (arr, ...args)=>[...arr, ...args.map((v)=> v*2)]
console.log( doubleAndReturnArgs([1,2,3], 4,4) );


// Qs5. Write a function called mergeObjects that accepts two objects and returns a new
// object which contains all the keys and values of the first object and second object

const person = {
    name: "lakhan",
    age: 18
};
const car = {
    brand: "BMW",
    color: "pink"
};

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2 })
console.log(mergeObjects(car, person))