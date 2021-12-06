class Animal {
  feet: number = 4;
  constructor(name: string, numFeet: number) {}
}

class Human {
  feet: number = 2;
  hands: number = 2;
  constructor(number: string, gender: Gender) {}
}

let animal: Animal = new Animal("dog", 4);
let human: Human = new Human("Taro", "male");
human = animal; // Error
animal = human;
