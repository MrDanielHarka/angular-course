import { EventEmitter, Injectable } from "@angular/core";
import { ContactService } from "../contact/contact.service";
import { Group } from "./group";

@Injectable()
export class GroupService {

groups: Group[] = [];
clickedGroup: EventEmitter<Group> = new EventEmitter();

constructor(public contactService: ContactService) {
    let contacts = this.contactService.contacts;
    let group1 = new Group('Group1', 'This is group 1.', [contacts[0],contacts[2], contacts[4]]);
    let group2 = new Group('Group2', 'This is group 2.', [contacts[1],contacts[3], contacts[5]])
    let group3 = new Group('Group3', 'This is group 3.', [contacts[0],contacts[1], contacts[2]])
    let group4 = new Group('Group4', 'This is group 4.', [contacts[3],contacts[4], contacts[5]])

    this.groups.push(group1, group2, group3, group4)
}

setSelectedGroup(group: Group){
    this.clickedGroup.emit(group);
}
}