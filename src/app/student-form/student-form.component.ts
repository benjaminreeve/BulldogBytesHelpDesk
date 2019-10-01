import { Component, OnInit } from '@angular/core';
import { SendRequestService } from '../send-request.service';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentRequest } from '../student-request';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  constructor(private requestService: SendRequestService) {
    this.requestTypes = [
      'Tech Help', 'Informational Video'
    ];
  }

  Form = new FormGroup({
    nameField: new FormControl(''),
    gradeField: new FormControl(''),
    typeField: new FormControl(''),
    teacherField: new FormControl(''),
    emailField: new FormControl(''),
    requestField: new FormControl(''),
    detailsField: new FormControl('')
  })

  requestTypes;

  onSubmit() {

    const request: StudentRequest = new StudentRequest(
      this.Form.controls['nameField'].value,
      this.Form.controls['gradeField'].value,
      this.Form.controls['typeField'].value,
      this.Form.controls['teacherField'].value,
      this.Form.controls['emailField'].value,
      this.Form.controls['requestField'].value,
      this.Form.controls['detailsField'].value,
    );

    this.requestService.sendRequestForStudent(request);

    this.Form.reset();
  }

  ngOnInit() {
  }

}
