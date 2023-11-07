let a = 10;
let b = 20;

for (let i = a; i <= 10; i++) {
    console.log(i);
}

let i = a; // Initialize 'i' to 'a' before using it in the while loop

while (i <= b) {
    console.log(i);
    i++; // Increment 'i' to avoid an infinite loop
}

