import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../../shared/models/user';


@Component({
  selector: 'app-register-verification',
  templateUrl: './register-verification.component.html',
  styleUrls: ['./register-verification.component.css']
})
export class RegisterVerificationComponent implements OnInit {

	public routePath: string
  public createdUserName: string;
	public createdUserEmail: string;
	public token: string;
  public verificationMessageDiv: any;

  constructor(private route: ActivatedRoute, private authService: AuthService, private http: HttpClient) { }

  ngOnInit() {
    //ovo je isti onaj path koji navodis u routing modulu (tamo gde navodis rute za router outlet) i na osnovu toga koja je ruta aktivirana radim razlicite stvari
    this.routePath = this.route.snapshot.routeConfig.path
    this.verificationMessageDiv = document.getElementById('myid-verification-message')
    this.createdUserName = this.authService.createdUserName

    // Objasnjenje za paramMap i foru oko njega (ne znam kolko je ovde potrebno da imas paramMap, stavio sam ga za svaki slucaj vise) - https://scotch.io/tutorials/handling-route-parameters-in-angular-v2#toc-grabbing-route-parameters-the-observable-way
  	this.route.paramMap.subscribe(params => {
  		this.token = params.get('token')
      this.createdUserEmail = params.get('email')

      if(this.token && this.createdUserEmail && (this.routePath === 'register/verification/:email/:token')){
        this.checkAndVerifyCreatedUser().subscribe((data: { userName: string }) => {
            this.verificationMessageDiv.textContent = 'Your registration is now complete and you can log in! Thank you for joining us ' + data.userName + '!';
        }, (err: HttpErrorResponse) => {
          this.verificationMessageDiv.textContent = err.error.error
        })
        
      }

  	})

  	

  	
    console.log(this.routePath)
  }

  public checkAndVerifyCreatedUser() {
    return this.http.patch('http://localhost:8000/api/register/verify', {
      'email': this.createdUserEmail,
      'verify_token': this.token
    })
  }

}
