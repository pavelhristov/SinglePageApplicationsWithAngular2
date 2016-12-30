import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';

@Injectable()
export class DataService {

    constructor(private http: Http) { }

    getTopMovies() {
        return this.http.get('../data/movies.json')
            .map((res: Response) => res.json());
    }

    getMovies() {
        // "imdbID": "tt0111161"
        let movies: any[] = [];
        let k = 25;
        for (let i = 0; i < k; i++) {
            this.http.get(`http://www.omdbapi.com/?i=${this.titleGenerator()}&plot=short&r=json`)
                .map((res: Response) => res.json())
                .toPromise()
                .then(movie => {
                    if (movie.Response === 'True') {
                        movies.push(movie);
                    } else {
                        k++;
                    }
                });
        }

        return movies;
    }

    getMovieById() {

    }

    private titleGenerator() {
        let templateId = 'tt';

        while (templateId.length < 9) {
            templateId += this.getRandomDigit();
        }

        return templateId;
    }

    private getRandomDigit() {
        return Math.floor(Math.random() * 10);
    }
}
