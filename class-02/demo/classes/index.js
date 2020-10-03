'use strict';

const classes = require('./class.js');
console.log("classes >>>> ", classes)
const dogClass = classes.dog;

console.log("dogClass >>> ",dogClass)
// ./constructor.js or ./constructor in the require
const dogConstructor = require('./constructor');

const black = new dogConstructor('Black');
// console.log("black : ", black);

black.walk();
black.speak();

console.log("-------------------------");

const puppy = new dogClass('Puppy');
// console.log("puppy: ",puppy);

puppy.walk();
puppy.speak();
puppy.run();
puppy.shout();