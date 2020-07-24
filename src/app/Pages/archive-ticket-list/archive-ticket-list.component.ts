import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-archive-ticket-list',
  templateUrl: './archive-ticket-list.component.html',
  styleUrls: ['./archive-ticket-list.component.css']
})
export class ArchiveTicketListComponent implements OnInit {

  constructor(private app: AppService) { }

  ngOnInit() {
    this.app.handleLogIn();
  }

}
