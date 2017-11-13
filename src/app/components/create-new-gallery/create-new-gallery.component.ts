import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gallery } from '../../shared/models/gallery';
import { GalleryService } from '../../shared/services/gallery.service';
import { Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';


@Component({
  selector: 'app-create-new-gallery',
  templateUrl: './create-new-gallery.component.html',
  styleUrls: ['./create-new-gallery.component.css']
})
export class CreateNewGalleryComponent implements OnInit {

	public gallery: Gallery = new Gallery();
  public addNewImages: Array<number> = Array();

  constructor(private renderer: Renderer2, private elementRef: ElementRef, private galleryService: GalleryService, private router: Router) { }

  ngOnInit() {
  }

  public createGallery(gallery: Gallery){
    // console.log(gallery);
  	this.galleryService.createGallery(gallery).subscribe((data: any) => {
      alert("You have successfully created a new gallery!");
      console.log(data);
      this.router.navigateByUrl('/my-galleries'); 
    });
    
  }

  public addNewImage(){
    this.addNewImages.push(this.addNewImages.length + 1);
  }

  // public removeImage(index){

  //   this.addNewImages.splice(index,1);
  //   this.gallery.images[index+1]=null;
  //   this.gallery.images.splice(index+1,1);
  //   console.log(this.gallery.images);
  //   console.log(this.addNewImages);
  // }
}
