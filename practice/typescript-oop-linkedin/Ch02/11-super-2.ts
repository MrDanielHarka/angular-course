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
    constructor(data: { age: number, legs: number, name: string }) {
        super(data.age, data.legs, data.name);
    }

    meow(): string {
        return 'MEOW! HISS! HISS!';
    }
}
