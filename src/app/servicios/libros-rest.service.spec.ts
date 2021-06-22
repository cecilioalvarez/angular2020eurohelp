import { TestBed } from '@angular/core/testing';

import { LibrosRESTService } from './libros-rest.service';

describe('LibrosRESTService', () => {
  let service: LibrosRESTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrosRESTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
