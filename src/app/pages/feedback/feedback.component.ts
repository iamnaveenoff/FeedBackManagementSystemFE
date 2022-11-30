import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit, OnDestroy {
  constructor() {}
  autocompleteItemsAsObjects = [
    'Appreciation',
    'Escalation',
    'Feedback',
    'Others'
  ];

  ngOnInit() {
    console.log('naveen');
  }
  ngOnDestroy() {
  }
}
