= // Call the function with "sachin" as an argument
// Call the function with "sachin" as a string


function justReturn(){
    var text ="This is demo text"
    // console.log(text)
    return console.log(text)
}
justReturn()



// var has function scope

function VarClass(){    // function
    var name ="sachin";
    var surname = "Rathroe"
    console.log(name)
    console.log(surname)
   if(true){                             //Block and you can access values inside nested block for let and const
    console.log(name)    //if you declare same variable using var it wont give error 
    console.log(surname)

    var name = "sachin"   
    var surname = "Rathore"
   }

}

VarClass()

// let and const has block scope 
function Class(){    // function
    let name ="sachin";
    let surname = "Rathroe"
    console.log(name)
    console.log(surname)
   if(true){                             //Block and you can access values inside nested block for let and const
    // console.log(name)    //if you declare same variable using let or const it will give error bxz it wont take name and surname values
    // console.log(surname)
    let name = "sachin"
    let surname = "Rathore"
    console.log(name)    //if you declare same variable using let or const it will give error bxz it wont take name and surname values
    console.log(surname)
   }

}

Class()