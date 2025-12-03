// block scope -> if we declare let and const variables within the block, scope is inside the block , we cannot access outside the block.

// block multiple statements placed together as a single statement

// if(true){
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a); // 10
//     console.log(b); // 20
//     console.log(c); // 30
// }
// console.log(a); // 10
// console.log(b); // error -> notdefined
// console.log(c); // error -> notdefined

// var -> var variable is functional scope that means we cannot access outside that function.
// function print(){
//     var a = 10;
//     console.log(a);
// }
// print();
// console.log(a); // error -> notdefined , we cannot access var variable outside that function.

// variable shadowing
// if inner score has the same variable name as outer scope, then priority goes to inner scope and it will print inner scope value

var a = 10;
let b = 20;
const c = 30;

if(true){
    var a = 100;
    let b = 200;
    const c = 300;
    console.log(a); // 100
    console.log(b); // 200
    console.log(c); // 300
}
console.log(a); // 100
console.log(b); // 20
console.log(c); // 30




