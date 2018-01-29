import { Component, AfterViewInit  } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router){

  }

  ngAfterViewInit() {
  	this.router.events.subscribe(event => {
      
      if(event instanceof NavigationEnd){

      	let galleriesContainerWrapper = document.getElementsByClassName('myclass-galleries-container-wrapper') as HTMLCollectionOf<HTMLElement>;
      	let routerOutletWrapper = document.getElementsByClassName('myclass-router-outlet-wrapper') as HTMLCollectionOf<HTMLElement>;

      if(galleriesContainerWrapper.length !== 0){
        routerOutletWrapper[0].style.background = 'none';
        routerOutletWrapper[0].style.padding = '0';
        // console.log(galleriesContainerWrapper)
      }
      else{
        routerOutletWrapper[0].style.padding = '15px';
        routerOutletWrapper[0].style.backgroundColor = 'white';
      }

      }
    // console.log(event)
    });
  }

}
