/*
1. method / param overriding -> child overrides parent method
2. method overloading -> same name methods (JavaScript doesn't support this)
3. interfaces / abstract classes implements
*/

export class User {
    firstName: string;
    age: number;
    email: string;

    constructor(firstName: string, email: string, age: number) { }
}

class BaseUser extends User {
    protected role: string;

    public hasAllAccess(): boolean {
        return this.role === 'Admin';
    }
}

export class SuperAdmin extends BaseUser {
    role = 'Admin';
    password: string;

    constructor(firstName: string, lastName: string, age: number) {
        super(firstName, lastName, age)
    }

    // override 
    public hasAllAccess(): boolean {
        return true;
    }

    // overloading failure
    // public hasAllAccess(user: User) {
    //     return user.age > 18 && this.role;
    // }
}

export class Guest implements User {
    name: string;
    age: number;
    email: string;
    firstName: string;
    lastName: string;
    middleName: string;

    get fullName(): string {
        return `${this.firstName} ${this.middleName} ${this.lastName}`;
    }

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}