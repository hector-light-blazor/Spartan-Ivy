import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'spartan-card',
  templateUrl: './spartan-card.component.html',
  styleUrls: ['./spartan-card.component.css']
})
export class SpartanCardComponent implements OnInit {

  @Input() src: string = "";
  @Input() width: number = 210;
  @Input() height: number = 180;
  constructor() { }

  ngOnInit(): void {
  }

}
