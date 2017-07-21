import { Component, OnInit } from '@angular/core';
import { GoogleGeoApiService } from './../google-geo-api.service';

@Component({
  selector: 'app-reverse-geocoding',
  templateUrl: './reverse-geocoding.component.html',
  styleUrls: ['./reverse-geocoding.component.css'],
  providers: [GoogleGeoApiService]
})
export class ReverseGeocodingComponent implements OnInit {

  searchedAddress: string = null;
  searchQuery: string = null;

  constructor(
    private geoService: GoogleGeoApiService
  ) { }

  ngOnInit() {
  }

  getAddress(lat: string, lng: string): void {
    this.geoService.reverseGeocode(lat,lng).subscribe(data => {
      this.searchQuery = `lat: ${lat}, long: ${lng}`;
      this.searchedAddress = data.json().results[0].formatted_address;
    });
  }
}
