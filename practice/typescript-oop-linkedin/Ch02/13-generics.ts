export class User {
    name: string;
    age: number;
    email: string;
    isMale: boolean;
    public classicUserData: any;

    public mergeClassicUser(params: any): void {
        const { name, isMale, age, email } = this;

        this.classicUserData = { name, isMale, age, email, ...params };
    }
}

interface ClassicUser {
    name: { first: string, last: string };
}

interface ClassicUser2 {
    name: { first: string, middle: string, last: string };
}

const user1 = new User();
user1.mergeClassicUser({ name: { first: 'Dylan', last: 'Israel' } });

const user2 = new User();
user2.mergeClassicUser({ name: { first: 'Dylan', last: 'Israel', middle: 'Christopher' } });