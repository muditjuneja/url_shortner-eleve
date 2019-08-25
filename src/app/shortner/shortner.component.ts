import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UrlService } from '../shared/url.service';

@Component({
  selector: 'app-shortner',
  templateUrl: './shortner.component.html',
  styleUrls: ['./shortner.component.css']
})
export class ShortnerComponent implements OnInit {

  title = 'Url Shortner';
  url = '';
  message = '';
  error_message = '';

  constructor(private urlService: UrlService) {

  }

  ngOnInit() {

  }

  async getShortenedUrl() {
    console.log(this.url, "this.url");
    try {
      if (this.isValidUrl()) {
        let response = await this.urlService.getShortUrl({ url: this.url }).toPromise();
        if (response['data']) {
          this.message = 'Your short url is ' + environment.ui_uri + response['data']['code'] + '.';
        } else {
          this.error_message = 'An error has occured';
        }
      }
    } catch (E) {
      console.log(E);
    }
  }


  isValidUrl() {
    return true;
  }

}
