import { TestBed } from '@angular/core/testing';

import { DadesEntrenadorsService } from '../services/dades-entrenadors';

describe('DadesEntrenadors', () => {
  let service: DadesEntrenadorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadesEntrenadorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
