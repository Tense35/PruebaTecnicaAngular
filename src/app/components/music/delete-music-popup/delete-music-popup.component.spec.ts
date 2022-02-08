import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMusicPopupComponent } from './delete-music-popup.component';

describe('DeleteMusicPopupComponent', () => {
  let component: DeleteMusicPopupComponent;
  let fixture: ComponentFixture<DeleteMusicPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMusicPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMusicPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
