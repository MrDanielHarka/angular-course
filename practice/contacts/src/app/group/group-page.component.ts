import { Component } from "@angular/core";
import { GroupService } from "./group.service";

@Component({
    selector: 'app-group-page',
    templateUrl: './group-page.component.html'
})
export class GroupPageComponent {
    constructor(public groupService: GroupService) {

    }
}