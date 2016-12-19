import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'mvdb-order-by',
    templateUrl: './movies-order-by.component.html'
})
export class MoviesOrderByComponent {
    values: string[];

    @Output() selectOrder: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
        this.values = ['Ascending', 'Descending'];
    }

    selectItem(value: string) {
        this.selectOrder.emit(value);
    }
}
