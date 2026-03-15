import { TestBed } from '@angular/core/testing';

import { DadesEntrenadors } from './dades-entrenadors';

describe('DadesEntrenadors', () => {
  let service: DadesEntrenadors;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadesEntrenadors);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
