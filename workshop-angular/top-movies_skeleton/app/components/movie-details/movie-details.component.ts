import { Injectable, Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Injectable()
@Component({
    template: `
    <h2>{{movie.Title}}</h2>
    `
})
export class MovieDetailsPageComponent implements OnInit {
    // http://www.omdbapi.com/?i=${imdbID}&plot=short&r=json
    http: Http;
    movie: any;
    route: ActivatedRoute;

    constructor(http: Http, route: ActivatedRoute) {
        this.http = http;
        this.movie = {};
        this.route = route;
    }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) =>
                this.http.get(`http://www.omdbapi.com/?i=${params['imdbID']}&plot=short&r=json`))
            .map((res: Response) => res.json())
            .subscribe(movie => this.movie = movie);
    }
}
