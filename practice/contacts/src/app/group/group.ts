import { Contact } from "../contact/contact";

export class Group {
    name: string;
    description: string;
    contacts: Contact[] = [];
}