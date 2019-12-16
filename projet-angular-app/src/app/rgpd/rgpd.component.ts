import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DomSanitizer } from '@angular/platform-browser';
import { CacheService } from '../services/cache.service';


@Component({
  selector: 'app-rgpd',
  templateUrl: './rgpd.component.html',
  styleUrls: ['./rgpd.component.css']
})
export class RgpdComponent implements OnInit {

  content: any;

  constructor(private httpClient: HttpClient, private sanitizer:DomSanitizer, private cache: CacheService) {
    cache.addToCache(this.content);
    console.log("adding:", this.content)
   }

  public fetchUserData(reset: boolean) {
		let headers = new HttpHeaders();

		// In case developer wants to reset the cache for user data then set header
		if (reset) {
      console.log("reset cache")
			headers = headers.set("reset-cache", 'true');
    }
    console.log("read of cache")
		return this.httpClient.get(this.content, { headers });
	}

  ngOnInit() {
    this.httpClient.get("assets/data/rgpd.txt", {responseType: 'text'}).subscribe(data => {
      this.content = this.sanitizer.bypassSecurityTrustHtml(data);
    })
  }
}
