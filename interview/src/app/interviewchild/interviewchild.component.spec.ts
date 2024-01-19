import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewchildComponent } from './interviewchild.component';

describe('InterviewchildComponent', () => {
  let component: InterviewchildComponent;
  let fixture: ComponentFixture<InterviewchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
