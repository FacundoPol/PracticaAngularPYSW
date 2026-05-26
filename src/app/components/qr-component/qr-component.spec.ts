import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrComponent } from './qr-component';

describe('QrComponent', () => {
  let component: QrComponent;
  let fixture: ComponentFixture<QrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QrComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
