import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback } from 'src/app/models/feedback';
import { FeedBackApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  feedbackForm: FormGroup;
  // feedbackData: Feedback;
  submitted = false;
  constructor(private fb: FormBuilder, private apiService: FeedBackApiService) { }
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
    var catagoryData = JSON.stringify(this.feedbackForm.value.category);
    // console.log(catagoryData);
    var result = JSON.parse(catagoryData);
    // console.log(result[0].value)
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.feedbackForm.value.category));

    var feedbackData = {
      feedback: this.feedbackForm.value.feedback,
      name: this.feedbackForm.value.name,
      category: result[0].value
    };
    console.log(feedbackData);

    // stop here if form is invalid
    if (this.feedbackForm.invalid) {
      return;
    }

    this.apiService.saveFeedback(feedbackData).subscribe(res => console.log(res));


    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.feedbackForm.value.category, null, 4));
  }
}
