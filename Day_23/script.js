console.log("Day 23")
// creat nth number array and sum of all

//create array nth number
let n= prompt("enter number");
let arr =[];

for(let i=1; i<=n; i++){
    arr[i-1]=i;
}
console.log(arr);


// sum of n number in array
let sumOfArray=arr.reduce((a, b) => {
    return a+b;
})
console.log("sum of numbers in a array = " + sumOfArray)



// now calculate the nth nubers factorial 
let factorial=arr.reduce((a, b) => {
    return a*b;
})
console.log("factorial = " +factorial)



// 