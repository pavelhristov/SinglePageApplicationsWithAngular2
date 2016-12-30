import { Component, Input } from '@angular/core';

@Component({
    selector: 'mvdb-movie-short',
    templateUrl: './movie-short.component.html',
    styles: [`
        img{
            width: 75px;
        }
        p{
            display: inline-block;
        }
    `]
})
export class MovieShortComponent {
    title: string;
    imdbRating: string;
    year: string;
    poster: string;
    imdbID: string;

    @Input('movie') set movie(movie: any) {
        this.title = movie.Title;
        this.poster = movie.Poster;
        this.imdbRating = movie.imdbRating;
        this.year = movie.Year;
        this.imdbID = movie.imdbID;
        if (this.poster === 'N/A') {
            this.poster = 'https://anastaciomartinez.files.wordpress.com/2011/12/themovies.jpg';
        }
        if (this.imdbRating === 'N/A') {
            this.imdbRating = '';
        }
    }
}
