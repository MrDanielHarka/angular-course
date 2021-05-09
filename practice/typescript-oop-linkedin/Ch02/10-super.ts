export class Animal {
    age: number;
    legs: number;
    name: string;

    constructor(age: number, legs: number, name: string) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }
}

export class Cat extends Animal {
    meow(): string {
        return 'MEOW! HISS! HISS!';
    }
}

export class Dog implements Animal {
    age: number;
    legs: number;
    name: string;

    woof(): string {
        return 'WOOF! WOOF! WOOF!';
    }
}