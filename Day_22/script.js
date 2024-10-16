// selecting of element 
var a=document.querySelector("h1")

// changing HTML 
a.innerHTML="Javascript bhi padhle"

// changing css
a.style.color="#00ff00"

// event lestener 
a.addEventListener("click", ()=>{
    a.innerHTML="badal gya hoon m bhai"
    a.style.color="yellow"
    a.style.backgroundColor="black"
    console.log("event listener run succesfully")
});

var bulb = document.querySelector(".bulb")
var btn = document.querySelector("button")
let body= document.querySelector("body")

var iam=0
btn.addEventListener("click", function(){
    if(iam== 0 ){
        bulb.style.backgroundColor="#f2ff00"
        body.style.backgroundColor="black"
        console.log("on ")
        iam=1
    }else{
        bulb.style.backgroundColor="transparent"
        body.style.backgroundColor="transparent"
        console.log("off")
        iam=0
    }

});