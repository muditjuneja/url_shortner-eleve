import { Component } from '@angular/core';
import { UrlService } from './shared/url.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Url Shortner';
  url = '';
  message = '';
  error_message = '';

  constructor(private urlService: UrlService) {

  }

  async getShortenedUrl() {
    console.log(this.url, "this.url");
    if (this.isValidUrl()) {
      let response = await this.urlService.getShortUrl({ url: this.url }).toPromise();
      if (response['data']) {
        this.message = 'Your short url is ' + environment.ui_uri + response['data']['code'] + '.';
      } else {
        this.error_message = 'An error has occured';
      }
    }
  }


  isValidUrl() {
    return true;
  }
}
