// var box = document.querySelector("#img-box");
// var love = document.querySelector("i");

// box.addEventListener("dblclick",function() {

//     love.style.transform="translate(-50%, -50%) scale(2);"
//     console.log("This is working")
// })
var box = document.querySelector("#img-box");
var love = document.querySelector("i");

box.addEventListener("dblclick", function() {
    love.style.transform = "translate(-50%, -50%) scale(2)";
    console.log("This is working");     
    //set timeout function for delay and it is for browser
    setTimeout(function() {
        love.style.transform = "translate(-50%, -50%) scale(0)"; // Reset the transformation
    }, 1000);
});
