import { Component } from '@angular/core';

@Component({
    selector: 'mvdb-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    sortBy: string;

    constructor() {
        this.sortBy = 'imdbRating';
    }

    action(value: string) {
        this.sortBy = value;
    }
}
