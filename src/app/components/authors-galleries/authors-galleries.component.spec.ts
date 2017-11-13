import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsGalleriesComponent } from './authors-galleries.component';

describe('AuthorsGalleriesComponent', () => {
  let component: AuthorsGalleriesComponent;
  let fixture: ComponentFixture<AuthorsGalleriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsGalleriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsGalleriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
