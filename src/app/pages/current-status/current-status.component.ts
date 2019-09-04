import { Component, OnInit } from '@angular/core';
import { DatastoreService } from 'src/app/services/datastore.service';

@Component({
  selector: 'app-current-status',
  templateUrl: './current-status.component.html',
  styleUrls: ['./current-status.component.scss']
})
export class CurrentStatusComponent implements OnInit {

  constructor(
    private api: DatastoreService
  ) {}

  /* Page Tasks:
   *
   *  1) Connect and take the data from the API - use getPolicies function to retrieve the data
   *  2) Create one layer table witch will display the income data
   *  3) Table must contain the following columns: 
   * 
   *    ==> num, amount, description
   * 
   *  3) Style the page;
   *  4) Header must be vissible for this page;
   * 
   */

  ngOnInit() { }

}
