import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'mvdb-sort-by',
    templateUrl: './movies-sort-by.component.html'
})
export class MoviesSortByComponent {
    values: string[];

    @Output() selectSort: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
        this.values = ['Title', 'Year', 'imdbRating'];
    }

    selectItem(value: string) {
        this.selectSort.emit(value);
    }
}
