import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'mvdb-title-search',
    template: `
        <input type="text" (titleFilter)="title" (input)="onKey($event)">
    `
})
export class TitleSearchComponent {
    title: string;

    @Output() titleFilter: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
        this.title = '';
    }
    onKey(event: any) {
        this.title = event.target.value;
        this.titleFilter.emit(this.title);
    }
}
