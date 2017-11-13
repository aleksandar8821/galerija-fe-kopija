import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AllGalleriesComponent } from './components/all-galleries/all-galleries.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MyGalleriesComponent } from './components/my-galleries/my-galleries.component';
import { CreateNewGalleryComponent } from './components/create-new-gallery/create-new-gallery.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthService } from './shared/services/auth.service';
import { GalleryService } from './shared/services/gallery.service';
import { AuthGuard } from './shared/guards/auth.guard';
import { GuestGuard } from './shared/guards/guest.guard';
import { GalleryDetailsComponent } from './components/gallery-details/gallery-details.component';
import { AuthorsGalleriesComponent } from './components/authors-galleries/authors-galleries.component';


@NgModule({
  declarations: [
    AppComponent,
    AllGalleriesComponent,
    LoginComponent,
    RegisterComponent,
    MyGalleriesComponent,
    CreateNewGalleryComponent,
    LayoutComponent,
    GalleryDetailsComponent,
    AuthorsGalleriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule    
  ],
  providers: [
    AuthService, 
    GalleryService, 
    AuthGuard, 
    GuestGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
