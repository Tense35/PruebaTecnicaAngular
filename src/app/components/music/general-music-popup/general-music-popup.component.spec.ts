import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralMusicPopupComponent } from './general-music-popup.component';

describe('GeneralMusicPopupComponent', () => {
  let component: GeneralMusicPopupComponent;
  let fixture: ComponentFixture<GeneralMusicPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralMusicPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralMusicPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
