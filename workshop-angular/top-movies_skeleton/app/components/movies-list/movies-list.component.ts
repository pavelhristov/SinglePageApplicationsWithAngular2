import { Inject, Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { SortPipe } from '../../pipes/sort.pipe';

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
     private pipeSort: SortPipe = new SortPipe();


    constructor( @Inject(Http) http: Http) {
        this.http = http;
        this.pageTitle = 'MOVIES!';
        this.movies = [];
    }

    @Input('sortBy') set sortBy(sortBy: string) {
        this.sort = sortBy;
        this.pipeSort.transform(this.movies, this.sort);
    }

    ngOnInit() {
        this.http.get('../data/movies.json')
            .map((res: Response) => res.json())
            .subscribe(movies => this.movies = movies);
    }
}
