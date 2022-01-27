import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistCornerComponent } from './artist-corner.component';

describe('ArtistCornerComponent', () => {
  let component: ArtistCornerComponent;
  let fixture: ComponentFixture<ArtistCornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistCornerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
