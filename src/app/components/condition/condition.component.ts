import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent implements OnInit {

  constructor() { }

  outstandingAmt : boolean = false;
  accuredIntrest : boolean = false;
  stageLoss : boolean = false;

  ngOnInit() {
  }

}
