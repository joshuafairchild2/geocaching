import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { geoKey } from './api-keys';

@Injectable()
export class GoogleGeoApiService {

  constructor(
    private http: Http
  ) { }

  geocode(address: string): Observable<any> {
    return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${geoKey}`);
  }

}
