import { Component, OnInit } from '@angular/core';
declare var timeline: any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    timeline.load('timeline', null);
  }

}
