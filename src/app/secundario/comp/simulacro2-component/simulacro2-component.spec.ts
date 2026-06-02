import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Simulacro2Component } from './simulacro2-component';

describe('Simulacro2Component', () => {
  let component: Simulacro2Component;
  let fixture: ComponentFixture<Simulacro2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Simulacro2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Simulacro2Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
