import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-interviewchild',
  templateUrl: './interviewchild.component.html',
  styleUrls: ['./interviewchild.component.css']
})
export class InterviewchildComponent implements OnInit {


  counterValue = 0;
  @Output() valueChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
 

  increment() {
    this.counterValue++;
    this.valueChange.emit(this.counterValue);
  }

  decrement() {
    this.counterValue--;
    this.valueChange.emit(this.counterValue);
  }

}
