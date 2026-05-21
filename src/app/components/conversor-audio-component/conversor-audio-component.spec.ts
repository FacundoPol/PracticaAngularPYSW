import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorAudioComponent } from './conversor-audio-component';

describe('ConversorAudioComponent', () => {
  let component: ConversorAudioComponent;
  let fixture: ComponentFixture<ConversorAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConversorAudioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConversorAudioComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
