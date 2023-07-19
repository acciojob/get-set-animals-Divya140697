//complete this code

class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to log a sound the animal makes
  makeSound() {
    console.log("Some generic animal sound");
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
  }

  // Override the makeSound() method for cats
  makeSound() {
    console.log("Meow");
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }

  // Override the makeSound() method for dogs
  makeSound() {
    console.log("Woof");
  }
}

// Example usage:
const genericAnimal = new Animal("Unknown");
console.log(genericAnimal.species); // Output: Unknown
genericAnimal.makeSound(); // Output: Some generic animal sound

const cat1 = new Cat("Felis catus");
console.log(cat1.species); // Output: Felis catus
cat1.makeSound(); // Output: Meow
cat1.purr(); // Output: purr

const dog1 = new Dog("Canis lupus familiaris");
console.log(dog1.species); // Output: Canis lupus familiaris
dog1.makeSound(); // Output: Woof
dog1.bark(); // Output: woof


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
