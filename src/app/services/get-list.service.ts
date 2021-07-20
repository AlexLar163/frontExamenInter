import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetListService {
  private url = 'http://localhost:3003/list';
  constructor(private http: HttpClient) {}
  getListWorkers() {
    return this.http.get(this.url);
  }
}
