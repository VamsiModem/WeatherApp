import { TestBed, inject } from '@angular/core/testing';

import { GoogleMapsGeoCodingService } from './google-maps-geo-coding.service';

describe('GoogleMapsGeoCodingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleMapsGeoCodingService]
    });
  });

  it('should be created', inject([GoogleMapsGeoCodingService], (service: GoogleMapsGeoCodingService) => {
    expect(service).toBeTruthy();
  }));
});
