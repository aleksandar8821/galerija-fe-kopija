import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../shared/models/gallery';
import { GalleryService } from '../../shared/services/gallery.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-all-galleries',
  templateUrl: './all-galleries.component.html',
  styleUrls: ['./all-galleries.component.css']
})
export class AllGalleriesComponent implements OnInit {

  galleries: Gallery[] = [];
  filterGalleries: Gallery[] = [];
	filterTerm: any = '';

  constructor(private galleryService: GalleryService) { 
  
    

  }

  ngOnInit() {
  	this.galleryService.getGalleries().subscribe(
      data => {
      	 // console.log(data);
        this.galleries = data;
      },
      (err: HttpErrorResponse) => {
        alert('Backend returned code ${err.status} with message: ${err.error}');
      }
    );
    console.log(this.galleries);
  }

  filterGallery(filterTerm){
    this.galleryService.getGalleriesForFilter().subscribe(
      (data: Gallery[] ) => {
         console.log(data);

         this.galleries = data.filter((gallery: Gallery) => {
           return (gallery.name.toLocaleLowerCase().includes(filterTerm.toLocaleLowerCase()) || gallery.description.toLocaleLowerCase().includes(filterTerm.toLocaleLowerCase()) || (gallery.user.firstName + " " + gallery.user.lastName).toLocaleLowerCase().includes(filterTerm.toLocaleLowerCase()));
         });
         if(this.galleries.length === 0){
           alert('There are no galleries with term: ' + filterTerm);
         }
      },
      (err: HttpErrorResponse) => {
        alert('Backend returned code ${err.status} with message: ${err.error}');
      }
    );
    
  }

  

}
