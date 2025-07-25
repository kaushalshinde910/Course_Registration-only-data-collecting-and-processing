// app.routes.ts
import { Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';

export const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'students', component: StudentComponent }
];
