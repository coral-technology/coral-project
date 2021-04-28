import { Component } from '@angular/core';
import { NavigationService } from './animation/animations.services';
import { routerTransition } from './animation/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routerTransition(),
  ]
})
export class AppComponent {

  loading = true;

  constructor(private navigationService: NavigationService) {

  }


  getRouteAnimation(outlet) {
    return this.navigationService.animationValue;
  }

}
