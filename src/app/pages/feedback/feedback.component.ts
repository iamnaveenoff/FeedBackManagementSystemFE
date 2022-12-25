import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  feedbackForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) {}
  autocompleteItemsAsObjects = [
    'Appreciation',
    'Escalation',
    'Feedback',
    'Others'
  ];

  ngOnInit() {
    this.feedbackForm = this.fb.group({
      feedback: ['', Validators.required],
      name: [''],
      category: ['', Validators.required],
    });
  }
    get f() { return this.feedbackForm.controls; }
  onSubmit() {
      this.submitted = true;

        // stop here if form is invalid
        if (this.feedbackForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.feedbackForm.value.category, null, 4));
  }
}
