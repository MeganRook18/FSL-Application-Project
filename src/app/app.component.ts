import { Component, OnInit } from '@angular/core';
import { DatastoreService } from './services/datastore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular-Task';

  constructor(
    private api: DatastoreService
  ) { }
  
  ngOnInit () {
    this.api.apiData().subscribe(data => console.log('API Data => ', data));
  }
}
