import { Component, OnInit } from '@angular/core';

import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/common/movie';

@Component({
  	selector: 'app-movie-list',
	//templateUrl: './movie-list.component.html',
	templateUrl: './movie-list-table.component.html',
  	styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
	
	movies: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
	this.listMovies();
  }

	listMovies() {
		this.movieService.getMovieList().subscribe(
			data => {
				this.movies = data;
			}
		)
	}
}
