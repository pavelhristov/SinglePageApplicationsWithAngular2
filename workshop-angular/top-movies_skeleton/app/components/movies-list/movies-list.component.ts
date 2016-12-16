import { Inject, Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';

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
    http: Http;
    sort: string;
    order: string;
    pattern: string;

    constructor( @Inject(Http) http: Http) {
        this.http = http;
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
        this.http.get('../data/movies.json')
            .map((res: Response) => res.json())
            .subscribe(movies => this.movies = movies);
    }
}
