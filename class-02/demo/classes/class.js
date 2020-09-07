'use strict';

class Animal {
    constructor(name) {
        this.name = name;
    }
    // method
    walk() {
        console.log("Walking ...");
    }
}

class Dog extends Animal {
    speak() {
        console.log("woof ....");
    }

    run() {
        // invoking walk method from ANimal using super, 
        // super refers to my parent
        super.walk();
    }

    shout() {
        this.speak();
    }
}

// module.exports = {
//     dog: Dog,
//     animal : Animal
// };

// module.exports = Dog;

exports.dog = Dog;
exports.animal = Animal;