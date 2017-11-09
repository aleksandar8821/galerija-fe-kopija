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
	

  constructor(private galleryService: GalleryService) { 
  
    

  }

  ngOnInit() {
  	this.galleryService.getGalleries().subscribe(
      data => {
      	 console.log(data);
        this.galleries = data;
      },
      (err: HttpErrorResponse) => {
        alert('Backend returned code ${err.status} with message: ${err.error}');
      }
    );
  }

}
