import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gallery } from '../../shared/models/gallery';
import { GalleryService } from '../../shared/services/gallery.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-gallery-details',
  templateUrl: './gallery-details.component.html',
  styleUrls: ['./gallery-details.component.css']
})
export class GalleryDetailsComponent implements OnInit {

	gallery: any;
	images: Array<any> = [];

  constructor(private route: ActivatedRoute, private galleryService: GalleryService) { 

				
	  	
  }
  

  ngOnInit() {

  	let id = this.route.snapshot.paramMap.get('id');
			
			this.galleryService.getGalleryById(id).subscribe( (gallery: Gallery) => {	  		
					this.gallery = gallery;
					// gallery.images.forEach(gallery => );
					console.log(this.gallery);
				});  		
  	
  }

}
