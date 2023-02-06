import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaplayerComponent } from './mediaplayer.component';

describe('MediaplayerComponent', () => {
  let component: MediaplayerComponent;
  let fixture: ComponentFixture<MediaplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaplayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
