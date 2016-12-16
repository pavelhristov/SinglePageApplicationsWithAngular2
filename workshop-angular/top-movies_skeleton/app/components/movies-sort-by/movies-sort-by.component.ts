import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'mvdb-sort-by',
    template: `
    <ul>
      <li *ngFor="let value of values" (click)="selectItem(value)">{{value}}</li>
    </ul>
  `
})
export class MoviesSortByComponent {
    values: string[];

    @Output()select: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
        this.values = ['Title', 'Year', 'imdbRating'];
    }

    selectItem(value: string) {
        this.select.emit(value);
    }
}
