import { Component, Input } from "@angular/core";
import { Group } from "./group";

@Component({
    selector: 'app-group',
    templateUrl: './group.component.html'
})
export class GroupComponent {
    @Input()
    group: Group;
}