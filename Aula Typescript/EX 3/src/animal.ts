class Animal {
    falar(): string {
        return "Som de animal";
    }
}

class Cachorro extends Animal {
    falar(): string {
        return "Au au!";
    }
}

class Gato extends Animal {
    falar(): string {
        return "Miau!";
    }
}

const animais: Animal[] = [new Cachorro(), new Gato()];


for (let animal of animais) {
    console.log(animal.falar());
}
