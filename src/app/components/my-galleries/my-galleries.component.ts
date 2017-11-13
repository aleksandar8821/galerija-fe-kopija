import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../shared/models/gallery';
import { GalleryService } from '../../shared/services/gallery.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-my-galleries',
  templateUrl: './my-galleries.component.html',
  styleUrls: ['./my-galleries.component.css']
})
export class MyGalleriesComponent implements OnInit {

	myGalleries: Gallery[] = [];
	filterGalleries: Gallery[] = [];
	filterTerm: any = '';

  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
  	this.galleryService.getMyGalleries().subscribe(
      data => {
      	 // console.log(data);
        this.myGalleries = data;
      },
      (err: HttpErrorResponse) => {
        alert('Backend returned code ${err.status} with message: ${err.error}');
      }
    );
    console.log(this.myGalleries);
  }

filterGallery(filterTerm){
    this.galleryService.getMyGalleriesForFilter().subscribe(
      (data: Gallery[] ) => {
         console.log(data);
         this.myGalleries = data.filter((gallery: Gallery) => {
           return (gallery.name.toLocaleLowerCase().includes(filterTerm.toLocaleLowerCase()) || gallery.description.toLocaleLowerCase().includes(filterTerm.toLocaleLowerCase()));
         });
         if(this.myGalleries.length === 0){
           alert('There are no galleries with term: ' + filterTerm);
         }
      },
      (err: HttpErrorResponse) => {
        alert('Backend returned code ${err.status} with message: ${err.error}');
      }
    );
    
  }


}
