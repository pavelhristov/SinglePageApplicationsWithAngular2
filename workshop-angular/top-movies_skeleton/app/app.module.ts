import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieShortComponent } from './components/movie-short/movie-short.component';
import { SortPipe } from './pipes/sort.pipe';
import { MoviesSortByComponent } from './components/movies-sort-by/movies-sort-by.component';
import { MoviesOrderByComponent } from './components/movies-order-by/movies-order-by.component';
import { FilterTitlePipe } from './pipes/filter-title.pipe';
import { TitleSearchComponent } from './components/title-search/title-search.component';
import { TopMoviesComponent } from './components/top-movies/top-movies.component';
import { HomePageComponent } from './components/home/home.component';
import { MovieDetailsPageComponent } from './components/movie-details/movie-details.component';
import { DataService } from './services/data.service';

const appRoutes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'top-movies', component: TopMoviesComponent },
    { path: 'details/:imdbID', component: MovieDetailsPageComponent },
    { path: '**', redirectTo: 'home' }
];

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { CollapseDirective } from 'ng2-bootstrap';

@NgModule({
    // put all the needed data here
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent,
        MoviesListComponent,
        MovieShortComponent,
        MoviesSortByComponent,
        MoviesOrderByComponent,
        TitleSearchComponent,
        TopMoviesComponent,
        HomePageComponent,
        MovieDetailsPageComponent,

        SortPipe,
        FilterTitlePipe,

        CollapseDirective
    ],
    providers: [
        DataService,
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
