import { Injectable } from '@angular/core';
import { TeacherRequest } from './teacher-request';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SendRequestService {

  constructor(

  ) { }

  sendRequestForTeacer(request: TeacherRequest) {
    console.log('Teacher requested: ', request);
  }
}
