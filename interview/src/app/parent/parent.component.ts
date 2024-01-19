import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


  counterValue = 0;
  constructor() { }

  ngOnInit() {
  }
 

  updateCounter(newValue: number) {
    this.counterValue = newValue;
  }
}
