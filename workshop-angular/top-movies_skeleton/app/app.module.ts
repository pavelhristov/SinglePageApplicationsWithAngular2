import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieShortComponent } from './components/movie-short/movie-short.component';
import { SortPipe } from './pipes/sort.pipe';

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

        SortPipe
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
