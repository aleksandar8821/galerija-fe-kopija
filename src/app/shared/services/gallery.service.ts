import { Injectable } from '@angular/core';
import { Observer, Observable } from 'rxjs';
import { Gallery } from '../../shared/models/gallery';
import { User } from '../../shared/models/user';
import { AuthService } from '../../shared/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class GalleryService {

  private galleries: Gallery[] = [];
  private user: User;

  constructor(private http: HttpClient, private authService: AuthService) {}

  public getGalleries()
  {
    return new Observable((o: Observer<any>) => {
      this.http.get('http://localhost:8000/api/galleries')
        .subscribe(
          (galleries: any[]) => {
            // console.log(galleries);
            galleries.forEach((g) => {
              this.galleries.push(new Gallery(g.id, g.name, g.description, g.user_id, g.created_at, g.updated_at, g.user));
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
 
  public createGallery(gallery: Gallery) {
     console.log(gallery);
    return new Observable((o: Observer<any>) => {
      this.http.post('http://127.0.0.1:8000/api/galleries', {
        'name': gallery.name,
        'description': gallery.description,
        // 'user_id': gallery.user.id,
        'images': gallery.images
      }, {
        headers: this.authService.getRequestHeaders()
      }).subscribe( (data: any) => {
        // alert("You have successfully created a new gallery!");
        // console.log(data);
        
        o.next(data);
        return o.complete();
      }, (err: HttpErrorResponse) => {
        console.log(`Backend returned code ${err.status} with message: ${err.error}`);
      }
      );
    });

  }

  // public createGallery(gallery: Gallery) {
  //   console.log(gallery);
  //   return new Observable((o: Observer<any>) => {
  //     this.http.post('http://localhost:8000/api/galleries', {
  //       'name': gallery.name,
  //       'description': gallery.description
  //     }).subscribe((data) => {
  //       console.log(data);       
  //     }, (err) => {
  //       return o.error(err);
  //     });
  //   });
  // }

}
