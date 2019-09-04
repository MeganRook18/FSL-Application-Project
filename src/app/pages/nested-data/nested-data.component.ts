import { Component, OnInit } from '@angular/core';
import { DatastoreService } from 'src/app/services/datastore.service';

@Component({
  selector: 'app-nested-data',
  templateUrl: './nested-data.component.html',
  styleUrls: ['./nested-data.component.scss']
})
export class NestedDataComponent implements OnInit {

  constructor(
    private api: DatastoreService
  ) { }

  /* Page Tasks:
  *
  *  1) Connect and take the data from the API - use getPolicies function to retrieve the data
  *  2) Create 2 layers table witch will display the income data
  * 
  *  3) Table must contain the following columns: 
  * 
  *    ==> Layer 1: num, amount, description
  *    ==> Layer 2: clientName, amount        ==> It may contain multiple rows
  * 
  *   Description:
  *     Second layer must be hidden all the time, until the user select the row icon to expand the details.
  *     By expanding the details, correct and fresh data need to be retrieved from the api and displayed on the screen each time
  * 
  *  3) Style the page;
  *  4) Header must be vissible for this page;
  * 
  */

  ngOnInit() {
  }

}
