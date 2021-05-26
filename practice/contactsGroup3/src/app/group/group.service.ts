import { EventEmitter, Injectable } from '@angular/core';
import { Group } from './group';

@Injectable()
export class GroupService {
  groups: Group[] = [];
  clickedGroup: EventEmitter<Group> = new EventEmitter();

  constructor() {
    let group1 = new Group('Group1', '1st group description.');
    let group2 = new Group('Group2', '2nd group description.');
    let group3 = new Group('Group3', '3rd group description.');

    this.groups.push(group1, group2, group3);
  }

  setSelectedGroup(group: Group) {
    this.clickedGroup.emit(group);
  }
}
