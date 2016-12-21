import { Component } from '@angular/core';

@Component({
    templateUrl: './top-movies.component.html'
})
export class TopMoviesComponent {
    sortBy: string;
    orderBy: string;
    pattern: string;

    constructor() {
        this.sortBy = 'imdbRating';
        this.orderBy = 'Descending';
        this.pattern = '';
    }

    sorting(value: string) {
        this.sortBy = value;
    }

    titleFilter(value: string) {
        this.pattern = value;
    }

    ordering(value: string) {
        this.orderBy = value;
    }
}