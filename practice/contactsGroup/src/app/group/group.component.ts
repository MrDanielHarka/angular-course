import { Component } from "@angular/core";
import { Group } from "./group";
import { GroupService } from "./group.service";

@Component({
    selector: 'app-group',
    templateUrl: './group.component.html'
})
export class GroupComponent{
    group!: Group;

constructor(groupService: GroupService){
    groupService.clickedGroup.subscribe(groups => {this.group = groups});
}
}