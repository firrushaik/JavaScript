
/* DOM: Document Object Model.
Window Object -> whenever script file is loaded in the browser will create a new object called window object. */

console.log("Hello");
// console.log(window);
// console.log(window.document); // It will give same as it is or html code in console 

// console.dir(window.document); // It will give our code by object format

alert("Welcome to java script!!"); // It will give only alert messeage when we open that page

console.dir(window.document.body);

console.log(document.body.childNodes[5]);

document.body.childNodes[5].innerText =  " On the bulb";

/* Acess the tags using 

document.getElementById();
document.getElementByClassNmae();
document.getElementByTagName(); */

