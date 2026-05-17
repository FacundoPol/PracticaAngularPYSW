import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secundario } from './secundario';

describe('Secundario', () => {
  let component: Secundario;
  let fixture: ComponentFixture<Secundario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Secundario],
    }).compileComponents();

    fixture = TestBed.createComponent(Secundario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
