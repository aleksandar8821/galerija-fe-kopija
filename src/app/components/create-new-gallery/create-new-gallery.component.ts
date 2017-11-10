import { Component, OnInit } from '@angular/core';
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

	private gallery: Gallery = new Gallery();

  constructor(private renderer: Renderer2, private elementRef: ElementRef, private galleryService: GalleryService) { }

  ngOnInit() {
  }

  public createGallery(gallery: Gallery){
  	this.galleryService.createGallery(gallery);
  }

}
