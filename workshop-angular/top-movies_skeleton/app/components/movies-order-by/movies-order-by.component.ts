import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'mvdb-order-by',
    template: `
    <ul>
      <li *ngFor="let value of values" (click)="selectItem(value)">{{value}}</li>
    </ul>
  `
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
