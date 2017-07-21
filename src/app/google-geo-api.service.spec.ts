import { TestBed, inject } from '@angular/core/testing';

import { GoogleGeoApiService } from './google-geo-api.service';

describe('GoogleGeoApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleGeoApiService]
    });
  });

  it('should ...', inject([GoogleGeoApiService], (service: GoogleGeoApiService) => {
    expect(service).toBeTruthy();
  }));
});
