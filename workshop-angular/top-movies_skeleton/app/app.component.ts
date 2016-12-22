import { Component } from '@angular/core';

@Component({
    moduleId: 'module.id',
    selector: 'mvdb-app',
    templateUrl: './app.component.html',
    styles: [`
        #content{
            margin-top: 60px;
            margin-left: 1%;
            margin-right: 1%;
        }
    `]
})
export class AppComponent {
    public isCollapsed: boolean = true;
}
