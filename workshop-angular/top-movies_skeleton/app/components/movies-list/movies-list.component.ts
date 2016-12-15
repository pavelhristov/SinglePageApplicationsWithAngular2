import { Inject, Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
    selector: 'movies-list',
    templateUrl: './movies-list.component.html'
})
export class MoviesListComponent implements OnInit {
    movies: Array<any>;
    pageTitle: string;
    http: Http;

    constructor( @Inject(Http) http: Http) {
        this.http = http;
        this.pageTitle = 'MOVIES!';
        this.movies = [];
    }

    ngOnInit() {
        this.http.get('../data/movies.json')
            .map((res: Response) => res.json())
            .subscribe(movies => this.movies = movies);
    }
}
