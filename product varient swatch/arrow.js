// Arrow function 

const a = name3 => {
    console.log("HEllow")
    console.log("Sachin how are you ?")
}
a()

const myarrowFunc = (a, b) => console.log(a + b);  // one line expression just like lambda function 
myarrowFunc(5, 10); 

const name1 = ()=>  console.log("sachin")  

name1()
 
var subject = (sname) => console.log("subject name is  " + sname);

subject("mathss");


const varObj = {
    name: "Sachin",
    age: 24,
  };
  
  console.log(varObj.name, varObj.age); // Access the 'name' property of the object

  const varObj2 = {                         //access using simple function 
    name: "Sachin",
    age: 24,
    show: function () {
      console.log(this.name);
    }
  };
  
// this with arrow function and normaol function 

const x ={
    name:"aadu",
    surname:"nigam",
    getName : function(){
        console.log(`my name is ${this.name} and my suranme is ${this.surname}`)
    }
}
  x.getName()

  const y ={
    name:"aadu",
    surname:"nigam",
    getName : function(){

        setTimeout(() {
            console.log(`my name is ${this.name} and my suranme is ${this.surname}`)   
        }, 2000);
        
    }
}
  x.getName()