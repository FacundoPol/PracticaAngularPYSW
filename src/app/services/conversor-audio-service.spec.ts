import { TestBed } from '@angular/core/testing';

import { ConversorAudioService } from './conversor-audio-service';

describe('ConversorAudioService', () => {
  let service: ConversorAudioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConversorAudioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
