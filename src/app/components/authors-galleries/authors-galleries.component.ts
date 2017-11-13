import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gallery } from '../../shared/models/gallery';
import { GalleryService } from '../../shared/services/gallery.service';

@Component({
  selector: 'app-authors-galleries',
  templateUrl: './authors-galleries.component.html',
  styleUrls: ['./authors-galleries.component.css']
})
export class AuthorsGalleriesComponent implements OnInit {

authorsGalleries: Gallery[] = [];

  constructor(private galleryService: GalleryService,  private route: ActivatedRoute) { }
//ne treba ti ovde opet user id na frontendu, vec na osnovu galerije, mozes da iz bekenda da ga izvuces
  ngOnInit() {
  	this.route.params.subscribe(params => {
            this.galleryService.getAuthorsGalleries(params.id).subscribe(data => {
                this.authorsGalleries = data;
               console.log(this.authorsGalleries);
            });
        });

  }

  filterGallery(filterTerm){
    this.galleryService.getAuthorsGalleriesForFilter().subscribe(
      (data: Gallery[] ) => {
         console.log(data);
         this.authorsGalleries = data.filter((gallery: Gallery) => {
           return (gallery.name.toLocaleLowerCase().includes(filterTerm.toLocaleLowerCase()) || gallery.description.toLocaleLowerCase().includes(filterTerm.toLocaleLowerCase()));
         });
         if(this.authorsGalleries.length === 0){
           alert('There are no galleries with term: ' + filterTerm);
         }
      }
    );
    
  }

}
