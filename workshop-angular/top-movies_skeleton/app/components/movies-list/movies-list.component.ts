import { Injectable, Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Injectable()
@Component({
    selector: 'mvdb-movies-list',
    templateUrl: './movies-list.component.html',
    styles: [`
        .movies-container{
            margin-left:10%;
            margin-right:10%;
        }
    `]
})
export class MoviesListComponent implements OnInit {
    movies: Array<any>;
    pageTitle: string;
    sort: string;
    order: string;
    pattern: string;

    constructor(private dataService: DataService) {
        this.pageTitle = 'MOVIES!';
        this.movies = [];
        this.pattern = '';
    }

    @Input('sortBy') set sortBy(sortBy: string) {
        this.sort = sortBy;
        this.pattern = this.pattern || '';
    }

    @Input('orderBy') set orderBy(orderBy: string) {
        this.order = orderBy;
        this.pattern = this.pattern || '';
    }

    @Input('pattern') set titleFilter(titleFilter: string) {
        this.pattern = titleFilter || '';
    }

    ngOnInit() {
        this.dataService.getTopMoveis()
            .subscribe(movies => this.movies = movies);
    }
}
