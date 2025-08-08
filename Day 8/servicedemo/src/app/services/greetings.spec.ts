import { TestBed } from '@angular/core/testing';

import { Greetings } from './greetings';

describe('Greetings', () => {
  let service: Greetings;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Greetings);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
