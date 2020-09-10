import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  providers: [NgbCarouselConfig] 
})
export class HomepageComponent implements OnInit {
  images = [1, 2, 3, 4].map(() => `https://source.unsplash.com/random/300x300=${Math.random()}`);
  constructor(config: NgbCarouselConfig) { 

    config.interval = 6000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  
  }

  ngOnInit() {
  }

}
