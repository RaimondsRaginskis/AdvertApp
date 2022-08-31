import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdvertService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getAdvert(id: number) {
    return this.http.get(this.baseUrl + 'adverts/' + id);
  }

}
