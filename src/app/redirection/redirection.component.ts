import { Component, OnInit } from '@angular/core';
import { UrlService } from '../shared/url.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-redirection',
  templateUrl: './redirection.component.html',
  styleUrls: ['./redirection.component.css']
})
export class RedirectionComponent implements OnInit {

  constructor(private urlService: UrlService, private route: ActivatedRoute) { }

  code;
  url;
  async ngOnInit() {
    this.route.params.subscribe(async (params) => {
      this.code = params['code'];
      this.getLongUrl(this.code);
    })
  }


  async getLongUrl(code) {
    // console.log(this.url, "this.url");
    try {
      let response = await this.urlService.getLongUrl(code).toPromise();
      if (response['data']) {
        this.url = response['data']['url'];
        let that = this;
        setTimeout(function () {
          window.open(that.url, '_blank');
        }, 4000);
      } else {
      }
    } catch (E) {
      console.log(E);
    }

  }

}
