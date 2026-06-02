import { TestBed } from '@angular/core/testing';

import { Simulacro2Service } from './simulacro2-service';

describe('Simulacro2Service', () => {
  let service: Simulacro2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Simulacro2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
