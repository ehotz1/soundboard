import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundboxComponent } from './soundbox.component';

describe('SoundboxComponent', () => {
  let component: SoundboxComponent;
  let fixture: ComponentFixture<SoundboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
