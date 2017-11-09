import { Injectable } from '@angular/core';
import { Observer, Observable } from 'rxjs';
import { Gallery } from '../../shared/models/gallery';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GalleryService {

   private galleries: Gallery[] = [];

  constructor(private http: HttpClient) {}

  public getGalleries()
  {
    return new Observable((o: Observer<any>) => {
      this.http.get('http://localhost:8000/api/galleries')
        .subscribe(
          (galleries: any[]) => {
            galleries.forEach((c) => {
              this.galleries.push(new Gallery(c.id, c.name, c.description));
              // o.next(this.galleries);
            });
          });
            o.next(this.galleries);
            return o.complete();
          });
  }

}
