import { Injectable } from '@angular/core';
import { TeacherRequest } from './teacher-request';
import { StudentRequest } from './student-request';
import { HttpClient } from '@angular/common/http';
import { errorHandler } from '@angular/platform-browser/src/browser';


@Injectable({
  providedIn: 'root'
})
export class SendRequestService {

  constructor(private http: HttpClient) { }

  sendRequestForTeacher(request: TeacherRequest) {
    console.log('Teacher requested: ', request);

    this.http.post('http://localhost:8000/teachers', request).subscribe();

  }

  sendRequestForStudent(request: StudentRequest) {
    console.log('student requested: ', request);

    this.http.post('http://localhost:8000/students', request).subscribe();

  }
}
