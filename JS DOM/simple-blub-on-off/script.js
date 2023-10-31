// DOM in 4 parts
// 1. manuplate an Element
// 2. change HTML element
// 3. change css 
// 4. Event listner

var blub = document.querySelector("#off-bulb")
var btn = document.querySelector("#button")

var flag = 0

btn.addEventListener("click",function(){

    if (flag==0){
    blub.style.backgroundColor="yellow";
    btn.innerHTML="off"
    console.log("bulb is on now")
    flag=1    
}
else{
    blub.style.backgroundColor="white";
    btn.innerHTML="on"
    console.log("bulb is off now")
    flag=0   
}
})
