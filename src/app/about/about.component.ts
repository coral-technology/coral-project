import { Component, OnInit } from '@angular/core';
// declare var timeline: any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  loading = true;
  constructor() { }

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {                           //<<<---using ()=> syntax
      this.loading = false;
    }, 3000);
    this.loading = false;

  }

}
