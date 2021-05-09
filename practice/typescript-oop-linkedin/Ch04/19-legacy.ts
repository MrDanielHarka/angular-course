export class User {
    firstName: string;
    lastName: string;
    email: string;

    constructor(firstName: string, lastName: string, email: string) { }

    doesEmailMatch(email: string): boolean {
        return this.email === email;
    }
}