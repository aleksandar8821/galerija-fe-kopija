import { Injectable } from '@angular/core';
import { Observer, Observable } from 'rxjs';
import { Gallery } from '../../shared/models/gallery';
import { User } from '../../shared/models/user';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GalleryService {

  private galleries: Gallery[] = [];
  private user: User;

  constructor(private http: HttpClient) {}

  public getGalleries()
  {
    return new Observable((o: Observer<any>) => {
      this.http.get('http://localhost:8000/api/galleries')
        .subscribe(
          (galleries: any[]) => {
            // console.log(galleries);
            galleries.forEach((c) => {
              this.galleries.push(new Gallery(c.id, c.name, c.description, c.user_id, c.created_at));
//               this.user = new User(c.user.id, c.user.first_name
// , c.user.last_name, c.user.email);
              
            });
          });
            o.next(this.galleries);

            //o.next(this.user);
            return o.complete();
          });

  }

  public getGalleriesForFilter(): Observable<Gallery[]>{
    return Observable.of(this.galleries);
  }
 
 // public addMovie(gallery: Gallery) {
 //        return new Observable((o: Observer<any>) => {
 //            this.http.post('http://localhost:8000/api/movies', {
 //                name: movie.name,
 //                director: movie.director,
 //                image_url: movie.image_url,
 //                duration: movie.duration,
 //                release_date: movie.release_date,
 //                genres: movie.genres
 //            }, {
 //                    headers: this.authService.getRequestHeaders()
 //                }).subscribe((movies: any) => {
 //                    const movie = new Movie(
 //                        movies.name,
 //                        movies.director,
 //                        movies.image_url,
 //                        movies.duration,
 //                        movies.release_date,
 //                        movies.genres);
 //                    this.movies.push(movie);
 //                    o.next(movie);
 //                    return o.complete();
 //                }, (err: HttpErrorResponse) => {
 //                    alert(`Backend returned code ${err.status} with message: ${err.error}`);
 //                }
 //            );
 //        });
 //    }


}
