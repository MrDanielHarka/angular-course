import { Injectable } from "@angular/core";
import { Contact } from "../contact/contact";
import { Group } from "./group";

@Injectable()
export class GroupService {
    
    groups: Group[] = [];
    selectedGroup: Group;

    constructor() {
    }

    create(name: string, description: string, ...contacts: Contact[]) {
        let group = new Group();
        group.name = name;
        group.description = description;
        group.contacts = [...contacts];
        this.groups.push(group);
        return group;
    }

    setSelectedGroup(group: Group) {
        this.selectedGroup = group;
    }
}