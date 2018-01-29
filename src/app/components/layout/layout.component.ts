import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

	// ovo sto si injektirao authService u ovu komponentu ti omogucuje da pristupis metodama i propertijima authService-a
  constructor(private authService: AuthService) {
  	

  }

  ngOnInit() {
  	
  }

}
