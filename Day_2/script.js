arithmetic operators
let a=5;
let b=3;
console.log("a =", a,  "b =", b);
console.log("a + b=", a + b);
console.log("a - b=", a - b);
console.log("a * b=", a * b);
console.log("a / b=", a / b);
console.log("a % b=", a % b);
console.log("a ** b=",a * b);
console.log("++a=", ++a);
console.log("a=", a);
console.log("--a=", --a);
console.log("a=", a); 

assignment operators

let a=5;
let b=3;

console.log("a+=", a+=5);

comparision operators

let a = 6;
let b = 4;

console.log("a==b", a==b);
console.log("a!=b", a!=b);

conditional statement
let a = 6;
let b = "3";

console.log("a===b", a===b);
console.log("a!==b", a!==b);

let age=12;

if(age>=18){
    console.log("you can vote");
}

if(age<18){
    console.log("you can not vote");
}

let mode= "light"
let color;

if (mode==="dark"){
    color= "black";
}

if(mode="light"){
    color="white";
}

console.log(color);

if else statement

let mode="light"
let Color;

if(mode==="dark"){
    color="black";
}else{
    color="white";
}

console.log(color);

check odd or even no

let num=9;

if(num%2===0){
    console.log(num, "is even");
}
else{
    console.log(num, "is odd");
}

else-if statement

let age=56;

if(age<=18){
    console.log("minor");
}
else if(age>=18, '&&', age<=40){
    console.log("young");
}
else{
    console.log("old");
}

prompt 

let num=prompt("hello");
if(num%5===0){
    console.log(num, "is multiple of 5");
}else{
    console.log(num, "is not a multiple of 5");
}

practice qus

let marks = prompt("enter your marks");

if(marks<100,'&&', marks>80){
    console.log("A Grade");
}
else if(marks<79,'&&', marks>70){
    console.log("B Grade");
}
else if(marks<69,'&&', marks>60){
    console.log("C Grade");
}
else if(marks<59,'&&', marks>50){
    console.log("D Grade");
}
else{
     console.log(" F Grade");
    }

for loop
let i;

for(i=1;i<=5;i++){
    console.log("lakhan prajapat");
}

console.log("dwhkjwabdjkbasjkdbk");

let sum=0;
let n =5;

for(let i=1; i<=n; i++){
    sum=sum+i;
}
console.log(sum);

let i;

for(i=1; i<=5; i++){
    console.log("i =", i);
}

while loop
let i=20;

while(i<=10){
    console.log(i)
    i++;
}

do-while loop
let a=10;
do{
    console.log("a=", a)
    a++;
}while(a<=9);

for-of loop
let str= "javascript";
let size =0;

    for(let val of str){
        console.log("val=",val)
        size++;
    }
    console.log("size=", size);

// practice quations

let i=0;
for(i=0; i<=100; i++){
    if(i%2===0){
        console.log(i);
    }
}

let gameNum=25;
let j=prompt("Enter A Game Number");

while(j != gameNum){
    j= prompt("Enter A Right Game Number");
}
console.log("Congratulation you are Enterd ");

let str ="lakhan prajapat";

for(let i of str){
    console.log(i);
}

practice qus 2

let size = prompt("Enter A Size");

if(size==="xl"){
    console.log("price is = 250");
}
else if(size==="l"){
    console.log(" price is = 200");
}
else if(size==="m"){
    console.log(" price is = 100");
}
else if(size==="s"){
    console.log(" price is = 50");
}
else{
    console.log("Enter A Right Value");
}

practice qus for good string
let str="mango"
if((str[0]==="a") && (str.length>3)){
    console.log("it is a Good String");
}else{
    console.log("it is Not a Good String")
}

let a=[1,2,3];
let b=4;
b.push(4);
console.log(a);
let i=0;

for(i>=0; i<=100;);
num=num+1;
{
    console.log(num);
}

practice qus

let day=2;

if(day===1) {
    console.log(monday);
}else if(day===2){
    console.log(tuesday);
}else if(day===3){
    console.log(wednesday);
}else if(day===4){
    console.log(thursday);
}else if(day===5){
    console.log(friday);
}else if(day===6){
    console.log(saturday);
}else if(day===7){
    console.log(sunday);
}