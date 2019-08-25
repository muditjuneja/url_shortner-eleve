import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http: HttpClient) { }

  getShortUrl(data) {
    let url = environment.base_uri;
    return this.http.post(url, data);
  }

  getLongUrl(id) {
    let url = environment.base_uri + id;
    return this.http.get(url);
  }

  getAllUrls() {
    let url = environment.base_uri;
    return this.http.get(url);
  }
}
