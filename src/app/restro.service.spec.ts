import { TestBed, inject } from '@angular/core/testing';

import { RestroService } from './restro.service';

describe('RestroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestroService]
    });
  });

  it('should be created', inject([RestroService], (service: RestroService) => {
    expect(service).toBeTruthy();
  }));
});
