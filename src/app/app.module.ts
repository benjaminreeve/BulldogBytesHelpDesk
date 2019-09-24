import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { HttpClientModule } from '@angular/common/http';

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
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
