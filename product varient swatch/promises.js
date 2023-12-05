// let promise = new promise (resolve,reject)

// state and result between promise 



 const a = function(){
    console.log("This is first hellow")

    setTimeout(() => {                             //async menas it won't go one by one 
        console.log("This is second hellow")
    }, 2000);
 }

 console.log ("This is third hellow")

 a()

