import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TeacherRequest } from '../teacher-request';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';
import { SendRequestService } from '../send-request.service';


@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent implements OnInit {

  constructor() {
    this.requestTypes = [
      'Tech Help', 'Informatinal Video'
    ];
  }

  requestService = new SendRequestService();

  Form = new FormGroup({
    nameField: new FormControl(''),
    typeField: new FormControl(''),
    freePeriodField: new FormControl(''),
    requestField: new FormControl(''),
    detailsField: new FormControl('')
  });

  requestTypes;

  onSubmit() {

    const request: TeacherRequest = new TeacherRequest(
      this.Form.controls['nameField'].value,
      this.Form.controls['typeField'].value,
      this.Form.controls['requestField'].value,
      this.Form.controls['detailsField'].value,
      this.Form.controls['freePeriodField'].value
    );

    this.requestService.sendRequestForTeacer(request);
    this.Form.reset();
  }

  ngOnInit() { }


}
