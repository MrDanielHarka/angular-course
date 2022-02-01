import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  term = '';
  showWhitespace = true;

  // onFormSubmit(event: any) {
  //   event.preventDefault();
  //   this.submitted.emit(this.term);
  // }

  onInput(value: string) {
    this.showWhitespace = false;
    this.term = value;
    this.submitted.emit(this.term);
  }

  @Output() submitted = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}
