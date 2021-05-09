// Base / Parent Class
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

// Derived / Child Class / Same Shape
export class Dog extends Animal {
    woof(): string {
        return 'WOOF! WOOF! WOOF!';
    }
}
