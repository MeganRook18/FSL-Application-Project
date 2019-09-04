import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public routeLinks: Array<any>;

  constructor() {
    this.routeLinks = [
      { label: 'Current Status', link: 'client-status' },
      { label: 'Nested Data', link: 'nested-data' },
    ];
  }

}
