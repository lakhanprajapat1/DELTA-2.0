console.log("day 20")
// this keyword ...
const maeks={
    hindi:29,
    eng:35,
    sceince:77,
    math:56,
    sst:67,
    avg(){
        console.log((this.hindi+this.eng+this.math)/3);
    }
}
console.log(maeks)

// try & catch statement ..
console.log("hello");
console.log("hello");
try{
    console.log(a);
}catch{
    console.log("a is not define error")
}
console.log("hello");
console.log("hello");
console.log("hello");

// arrow function ...
const sum=(a,b) =>{
    console.log(a+b)
}

// impliet return ..
const mul= (a,b) => a*b;
console.log(mul(3,7));


//setTimeout function.
console.log("hii there")

// setTimeout( ()=>{
//     console.log("lakhan prajapati")
// } , 4000);                                // // 4 sec = 4000 ms.
// console.log("welcome to mangal planet");


// // setInterval function .. 
// setInterval( ()=>{
//     console.log("lakhan prajapati")
// } , 1000);                            // // 4 sec = 4000 ms.


// pratice qus 1.. 
const sqr=n =>(n*n);


// rractice qution 2.....
let id = setInterval(()=>{
    console.log("print hello")
} , 2000);
    
setTimeout(()=>{
    clearInterval(id)
    console.log("clear interval executed")
}, 10000);
