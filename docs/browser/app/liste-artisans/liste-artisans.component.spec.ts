import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeArtisansComponent } from './liste-artisans.component';

describe('ListeArtisansComponent', () => {
  let component: ListeArtisansComponent;
  let fixture: ComponentFixture<ListeArtisansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeArtisansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeArtisansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
