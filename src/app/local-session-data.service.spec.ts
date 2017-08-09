import { TestBed, inject } from '@angular/core/testing';

import { LocalSessionDataService } from './local-session-data.service';

describe('LocalSessionDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalSessionDataService]
    });
  });

  it('should be created', inject([LocalSessionDataService], (service: LocalSessionDataService) => {
    expect(service).toBeTruthy();
  }));
});
