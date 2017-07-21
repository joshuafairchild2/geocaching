import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { geoKey } from './api-keys';

@Injectable()
export class GoogleGeoApiService {

  geoEndpoint = `https://maps.googleapis.com/maps/api/geocode/json?key=${geoKey}`;

  constructor(
    private http: Http
  ) { }

  geocode(address: string): Observable<any> {
    const url = `${this.geoEndpoint}&address=${address}`;
    return this.http.get(url);
  }

  reverseGeocode(lat: string, lng: string): Observable<any> {
    const url = `${this.geoEndpoint}&latlng=${lat},${lng}`;
    return this.http.get(url);
  }

}
