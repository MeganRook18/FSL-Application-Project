import { Component, OnInit } from '@angular/core';
import { DatastoreService } from 'src/app/services/datastore.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(
    private datastore: DatastoreService
  ) { }

  /* Page Tasks:
  *
  *  1) Take and validate the user input fields;
  *  2) Connect with API;
  *  3) Display the necessary error messages
  *  4) Style the page
  *  5) Header should`t be vissible for this page;
  * 
  */
  ngOnInit() {
  }

  navigateTo(page: string) {
    this.datastore.navigateTo(page);
  }

}
