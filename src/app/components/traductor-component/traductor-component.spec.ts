import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraductorComponent } from './traductor-component';

describe('TraductorComponent', () => {
  let component: TraductorComponent;
  let fixture: ComponentFixture<TraductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraductorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TraductorComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
