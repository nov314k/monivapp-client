import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../common/movie';
import { Observable } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class MovieService {
	
	private baseUrl = 'https://monivapp.cfapps.io/api/movies'

	constructor(private httpClient: HttpClient) { }
	
	getMovieList(): Observable<Movie[]> {
    	return this.httpClient.get<Movie[]>(this.baseUrl);
  	}
}


// NOTE Implementation for HATEOS
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Product } from '../common/product';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// 
// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {
// 
//   private baseUrl = 'http://localhost:8080/api/products';
// 
//   constructor(private httpClient: HttpClient) { }
// 
//   getProductList(): Observable<Product[]> {
//     return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
//       map(response => response._embedded.products)
//     );
//   }
// }
// 
// interface GetResponse {
//   _embedded: {
//     products: Product[];
//   }
// }