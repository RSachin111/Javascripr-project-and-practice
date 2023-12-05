
// promise is also like promises in real life 

// state 
// pending
// fullfiled
// rejected


const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("this is promise1 ");
       
    }, 2000);
    resolve();
});

promise1.then(() => {
    console.log("promise 1 resolved");
});


promise2 = new Promise((resolve,reject)=>{
  console.log("THis is promise 2")
  resolve({
    name:"Sachin",
    midname:"singh",
    surname :"Rathore"
  })

})

promise2.then((user)=>{
    // console.log("promise 2 resolved" + user)
    console.log(user)
})


const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: "ankur",
            surname: "saxena"
        });
    }, 1000);
});

promise3.then((user) => {
    console.log(user);
});


const promise4 = new Promise((resolve, reject) => {
    let error = false; // Set error to false for the example
    if (!error) {
        resolve({ username: "Ram", password: 12345 });
    } else {
        reject("Something went wrong ...");
    }
});

promise4
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch((error) => {
        console.log(error);
    }).finally(()=>{
        console.log("Finally All work has done")
    })

