import { Component, OnInit } from '@angular/core';
import { GoogleGeoApiService } from './../google-geo-api.service';

@Component({
  selector: 'app-geocoding',
  templateUrl: './geocoding.component.html',
  styleUrls: ['./geocoding.component.css'],
  providers: [GoogleGeoApiService]
})
export class GeocodingComponent implements OnInit {

  searchedLngLat: any = null;
  searchQuery: string = null;

  constructor(
    private geoService: GoogleGeoApiService
  ) { }

  ngOnInit() {
  }

  getLngLat(address: string): void {
    if (address)
      this.searchQuery = address;
      this.geoService.geocode(address).subscribe(data => {
        this.searchedLngLat = data.json().results[0].geometry.location;
      });
  }
}
