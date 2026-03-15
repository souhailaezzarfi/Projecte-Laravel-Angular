import { TestBed } from '@angular/core/testing';

import { DadesSessions } from './dades-sessions';

describe('DadesSessions', () => {
  let service: DadesSessions;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadesSessions);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
