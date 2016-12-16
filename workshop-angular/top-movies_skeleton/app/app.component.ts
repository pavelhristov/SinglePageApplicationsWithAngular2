import { Component } from '@angular/core';

@Component({
    selector: 'mvdb-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    sortBy: string;
    orderBy: string;
    pattern: string;

    constructor() {
        this.sortBy = 'imdbRating';
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
