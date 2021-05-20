import { Component, Input } from "@angular/core";
import { Group } from "./group";
import { GroupService } from "./group.service";

@Component({
    selector: 'app-group-list',
    template: './group-list.component.html'
})
export class GroupListComponent {
    @Input()
    groups: Group[] = [];

    constructor(private groupService: GroupService) {
    }

    groupClicked(group: Group) {
        this.groupService.setSelectedGroup(group);
    }
}