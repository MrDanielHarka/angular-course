import { Contact } from "../contact/contact";

export class Group {
    constructor(
        public name: string,
        public description: string,
        public contacts: Contact[] = []
    ) {}
}