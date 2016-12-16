import { Component } from '@angular/core';

@Component({
    selector: 'mvdb-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    sortBy: string;
    orderBy: string;

    constructor() {
        this.sortBy = 'imdbRating';
    }

    sorting(value: string) {
        this.sortBy = value;
    }

    ordering(value: string) {
        this.orderBy = value;
    }
}
