import { Component, Injectable, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';

@Injectable()
@Component({
    templateUrl: './home.component.html'
})
export class HomePageComponent implements OnInit {
    movies: any[];

    constructor(private dataService: DataService) {
        this.movies = [];
    }

    ngOnInit() {
        this.getMovies();
    }

    getMovies() {
        this.movies = this.dataService.getMovies();
    }
}
