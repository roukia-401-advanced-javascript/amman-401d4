'use strict';

const Animal = function(name) {
    this.name = name;
}

Animal.prototype.walk = () => {
    console.log("Walking ...");
}

const Dog = function(name) {
    // Animal my parent
    Animal.call(this, name);
}
// Dog to have prototypes of Animal added to Dog prototypes
// i Have walk within Dog
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.speak = () => {
    console.log('woof ...');
}

module.exports = Dog;