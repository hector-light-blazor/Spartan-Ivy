import { Component, OnInit, Input } from '@angular/core';
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title: string = "NONE";
  @Input() color: string = "red";
  total: string = "200";
  faTicketAlt = faTicketAlt;
  constructor() { }

  ngOnInit(): void {
  }

}
