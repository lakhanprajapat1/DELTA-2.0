console.log("day 21");

const add= (a,b)=>{
    console.log(a+b);
}
add(2,5);


// map......
let student=[
    {
        name:"lakhan",
        marks:97
    },
    {
        name:"prajapati",
        marks:93
    },
    {
        name:"aman",
        marks:96
    }
];

let gpa = student.map((el)=>{
    return el.marks/10;
}) ;

console.log(gpa);


// filter method. ...

let arr=[2,5,8,6,3,9,4,6,2,0,1,4];

let even=arr.filter((num)=>{
    return num % 2 == 0;
})
console.log(even);

let odd = arr.filter( (num) => {
    return num % 2 != 0;
})
console.log(odd);


// every method ......
let Arr=arr.every((el) => el % 2 ==0 );
console.log(Arr); // false


//R   Reduce method ..........
let array=[1,2,3,4,5,6];
let result = array.reduce((res, el) => res+el );
console.log(result);

let arrr=[1,2,3,4,5,6,7]
let ans=arrr.reduce((res, el)=> (res+el))
// fint maximum number in array

let ar=[1,4,6,8,0,8,2,5,3,7];

let max =ar.reduce( (max, el) =>{
    if(el>max){
        return  el;
    }else{
        return max;
    }
} )
console.log(max);


//to check every number our array are multiples of 10 or not....

let Array=[20,40,50,13,20,50,90,60];
let res = Array.every( (el) => (el%2==0) );

console.log(res) // false because 13 is not multiples of 10


// find minimum number in array......
let art =[2,4,7,8,6,4,2,3,7,1];
let ress = art.reduce((min, el) => {
    if(el<min){
        return el;
    }else{
        return min;
    }
})
console.log(ress);




