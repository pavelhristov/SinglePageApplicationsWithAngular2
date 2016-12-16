import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieShortComponent } from './components/movie-short/movie-short.component';
import { SortPipe } from './pipes/sort.pipe';
import { MoviesSortByComponent } from './components/movies-sort-by/movies-sort-by.component';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    // put all the needed data here
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        MoviesListComponent,
        MovieShortComponent,
        MoviesSortByComponent,

        SortPipe
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
