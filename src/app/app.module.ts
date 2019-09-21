import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';
import { StudentFormComponent } from './student-form/student-form.component';

const AppRoutes: Routes = [
  { path: 'students', component: StudentFormComponent},
  { path: 'teachers', component: TeacherFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TeacherFormComponent,
    StudentFormComponent
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
