import { Component, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';


@Component({
  selector: 'app-create-new-gallery',
  templateUrl: './create-new-gallery.component.html',
  styleUrls: ['./create-new-gallery.component.css']
})
export class CreateNewGalleryComponent implements OnInit {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit() {
  }

}
