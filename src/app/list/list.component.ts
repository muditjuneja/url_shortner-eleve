import { Component, OnInit } from '@angular/core';
import { UrlService } from '../shared/url.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  urls = [];
  url;
  constructor(private urlService: UrlService) { }

  async ngOnInit() {
    await this.getLongUrl();
  }
  logs = [];

  async getLongUrl() {
    // console.log(this.url, "this.url");
    try {
      let response = await this.urlService.getAllUrls().toPromise();
      if (response['data']) {
        this.urls = response['data'];
      } else {
        this.urls = [];
      }
    } catch (E) {
      console.log(E);
    }

  }

  viewDetails(url) {
    this.url = url;
    this.logs = url.UrlLogs;
  }

}
