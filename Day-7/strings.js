// Strings

let fName = "Rock";
console.log(fName);

let sName = " Star";
console.log(sName);

let fullName = fName.concat(sName);
console.log("My full name is " + fullName);

// String templetes

// another way to prit that by using ` ${} `
console.log(`My full name is ${fullName}`);


// By using three methods we can print the character of a string

console.log(fullName.charAt(3)); // R
console.log(fullName.at(3));    // K
console.log(fullName[3]);       // k

// Methods

let city = '    Andhra Pradesh    ';
console.log(city.length); //22

// trim -> It will remove the starting and ending of the space

// trim()
console.log(city.trim());

// trimStart -> It will remove the starting of the space
console.log(city.trimStart());

// trimend -> It will remove the end of the space
console.log(city.trimEnd());

let place= 'Horsely hills';

// includes -> It will check the string 
console.log(place.includes('H')); // true
console.log(place.includes('hill')); // true
console.log(city.includes('hyjj')); // false

// endsWith -> It will check the end of the character or sentence ends that letter or words
console.log(place.endsWith('hill')); // false
console.log(place.endsWith('hills')); // true

console.log(place.startsWith('horsely')); // false case sensitive
console.log(place.startsWith('Horsely ')); // true

// substring -> It will give the starting index to endingIndex-1  
console.log(place.substring(1,4));// ors

// substring -> when we give negetive index it wont consider, it will start the 0th index 
console.log(place.substring(-1,4)); // hors

console.log(place.slice(1,3)); // 1 2 -> or
console.log(place.slice(-1,3)); // When we give negetive index it will considered that nd not print anything


console.log(place.indexOf('s'));


