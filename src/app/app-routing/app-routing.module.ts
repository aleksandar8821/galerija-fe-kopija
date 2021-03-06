import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllGalleriesComponent } from '../components/all-galleries/all-galleries.component';
import { CreateNewGalleryComponent } from '../components/create-new-gallery/create-new-gallery.component';
import { LoginComponent } from '../components/login/login.component';
import { MyGalleriesComponent } from '../components/my-galleries/my-galleries.component';
import { AuthorsGalleriesComponent } from '../components/authors-galleries/authors-galleries.component';
import { RegisterComponent } from '../components/register/register.component';
import { GalleryDetailsComponent } from '../components/gallery-details/gallery-details.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { GuestGuard } from '../shared/guards/guest.guard';


const appRoutes: Routes = [
	{
        path: '',
        redirectTo: '/galleries',
        pathMatch: 'full'
    },
    {
        path: 'galleries',
        component: AllGalleriesComponent,
    },
    {
        path: 'galleries/:id',
        component: GalleryDetailsComponent,
    },
    {
        path: 'my-galleries',
        canActivate: [AuthGuard],
        component: MyGalleriesComponent
    },
    {
        path: 'authors/:id',
        canActivate: [AuthGuard],
        component: AuthorsGalleriesComponent
    },
    {
        path: 'create',
        canActivate: [AuthGuard],
        component: CreateNewGalleryComponent
    },
    {
        path: 'login',
        canActivate: [GuestGuard],
        component: LoginComponent
    },
    {
        path: 'register',
        canActivate: [GuestGuard],
        component: RegisterComponent
    },
    
];


@NgModule({
	imports: [
	CommonModule,
	RouterModule.forRoot(
		appRoutes
		)
	],
	exports: [
	RouterModule
	],
	declarations: []
})
export class AppRoutingModule { }
