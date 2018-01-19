import { Component, OnInit } from '@angular/core';
import { Movie } from './Movie';

@Component({
    selector: 'app-movies',
    templateUrl: 'movie-list.component.html'
})

export class MovieListComponent implements OnInit {
    public movies: Movie[];
    constructor() {
        this.movies = [{Id: 100, Name: 'The ButterFly Effect', Year: 2006,
        Hero: 'Schwetzar', Heroine: 'Natalie', Director: 'Christopher', Subtitles: 'aha'}];
    }

    ngOnInit() {
    }
}
