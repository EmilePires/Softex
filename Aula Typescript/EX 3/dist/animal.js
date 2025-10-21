"use strict";
class Animal {
    falar() {
        return "Som de animal";
    }
}
class Cachorro extends Animal {
    falar() {
        return "Au au!";
    }
}
class Gato extends Animal {
    falar() {
        return "Miau!";
    }
}
const animais = [new Cachorro(), new Gato()];
for (let animal of animais) {
    console.log(animal.falar());
}
