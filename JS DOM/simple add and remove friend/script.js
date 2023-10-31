var name = document.querySelector('#name')
var addbtn = document.querySelector("#add")
var removebtn = document.querySelector("#remove")
var status = document.querySelector("#bio")
var imgbox = document.querySelector("#image-box")
var love = document.querySelector("i")
var flag = 0
addbtn.addEventListener("click",function(){
    addbtn.innerHTML="Request sent"
    removebtn.style.display="inline-block"
    addbtn.style.backgroundColor="green"
    addbtn.style.cursor="none"
    console.log("this is for add friend ")
})

removebtn.addEventListener('click',function(){
    removebtn.style.display="none"
    addbtn.innerHTML="Add Friend"
    addbtn.style.backgroundColor="olivedrab"
    addbtn.style.cursor="pointer"
    console.log("THis is for cancel friend request")

})

// addbtn.addEventListener('click',() =>{
//     if (flag==0){
//         addbtn.innerHTML="Request Sent"
//         removebtn.style.display="inline-block"
//         console.log("Request sent")
//         flag = 1 
//         console.log("this is add friend")
//     }
//         else{
//             addbtn.innerHTML="Add Friend"
//             flag =0
//             console.log("This is for remove friends")        }
    
// })

imgbox.addEventListener('dblclick',() =>{
    console.log("Thid is sachin  singh rathore ")
    love.style.transition="translate(-50%, -50%) scale(0);"
})