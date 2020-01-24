import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  API_URL = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getAllItems() {
    return this.http.get(`${this.API_URL}items`);
  }

  getItem(itemId) {
    return this.http.get(`${this.API_URL + 'items'}/${itemId}`);
  }
}
