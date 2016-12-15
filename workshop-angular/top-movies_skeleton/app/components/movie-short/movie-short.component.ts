import { Component, Input } from '@angular/core';

@Component({
    selector: 'mvdb-movie-short',
    templateUrl: './movie-short.component.html',
    styles: [`
        img{
            width: 50px;
        }
        a{
            text-decoration: none;
            font-size: 20px;
        }
    `]
})
export class MovieShortComponent {
    title: string;
    imdbRating: string;
    year: string;
    poster: string;

    @Input('movie') set movie(movie: any) {
        this.title = movie.Title;
        this.poster = movie.Poster;
        this.imdbRating = movie.imdbRating;
        this.year = movie.Year;
    }
}
