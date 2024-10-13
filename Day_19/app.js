console.log("Day_19");

// function student(){
//     console.log("lakhan");
//     console.log("aman");
//     console.log("naman");
// }
// student();


// function print1to5(){
//     for(let i=1; i<=10; i++){
//         console.log(i)
//     }
// }
// print1to5();


// function isAdult(){
//     let age = 17;
//     if(age>=18){
//         console.log("adult");
//     }else{
//         console.log("not adult")
//     }
// }
// isAdult();

// // practice qus........
// function poem(){
//     console.log("Twinkle, twinkle, little star,");
//     console.log("How I wonder what you are!");
//     console.log("Up above the world so high,");
//     console.log("Like a diamond in the sky.");
//     console.log("Twinkle, twinkle, little star,");
//     console.log("How I wonder what you are!");
// }
// poem();


// // practice qus 2... 
// function dice(){
//     const dice=Math.floor(Math.random()*6)+1;
//     console.log(dice);
// }
// dice();
// dice();
// dice();
// dice();
// dice();
// dice();


// function studentInfo(name, age){
//     console.log(name,"'s age is ", age);
// }

// studentInfo("lakhan", 18);
// studentInfo( "aman", 19 );
// studentInfo("amit", 20);

// function sum (a, b){
//     console.log(a+b);
// }

// sum(8, 2);
// sum(2,5);
// sum( 2.5 , 3.9 );


// // practice qus 3........ 
// function average(a, b, c){
//     console.log( (a+b+c)/ 3 );
// }
// average(8,12,16);


// //  practice qus 4.......... 
// function table(n){
//     for ( let i=n; i<=n*10; i+=n  ){
//         console.log(i);
//     }
// }
// table(3);


// function isAdult(age){
//     if (age>=18){
//         return "adult";
//     }else{
//         return "not adult";
//     }
// }
// console.log(isAdult(45));


// function sumof(n){
//     let sum = 0;
//     for ( let i=1; i<=n; i++ ){
//         sum=sum+i;
//     }
//     return sum;
// }
// console.log(sumof(21));


// // practice qus 5.... 

// let arr=["hi", "hello", "bye" ,"mr"];
// let cars=["hi", "hello", "bye" ,"mr"];
// let color=["red", "blue", "white", "green"];

// function concat(n){
//     let result="";
//     for( let i=0; i<n.length; i++ ){
//         result+=n[i];
//     }
//     return result;
// }
// console.log( concat(arr));
// console.log( concat(cars));
// console.log( concat(color));


// scops.....
let num = 29; // global scope

function calsum(a, b){
    let sum = a+b;  // function scope
    console.log(sum);
}
calsum(2, 2);

// // Laxical scope.....
// function outer(){
//     let x=5;
//     let y=6;
//     let z=x+y;
//     console.log(z);
//     function inner(){
//         console.log(z+2);
//     }
// }


let greet="hello" // global scope

function outer(){
    let greet="namaste"; //function scope
    console.log(greet); 

    function inner(){
        console.log(greet); // laxical scope
    }
    console.log(greet,"laxical scope ");
}
console.log(greet, "global scope");
outer(); // to call a function


// // function expresion .....
// const sum = function(a, b){
//     return a+b;
// }
// console.log( sum(6,9) );


// // higher order function ...........
// const greeting = function(){
//     console.log("hello") ;
// }

// function greetCount(func, count){
//     for( let i=1; i<=count; i++ ){
//         func();
//     }
// }

// greetCount(greeting, 78);
// greetCount( function greet(){console.log("hello")} , 35 ); 


// odd even number cheack factory....
function oddEvenTest(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }else if(request=="even"){
        return function(n){
            console.log(n%2==0);
        }
    }else{
        console.log("wrong request");
    }
}
let request="odd"  //or evem 


const calculator={
    add(a,b){
        return a+b;
    },
    Sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    }
};