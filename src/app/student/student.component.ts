import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student.component.html'
})
export class StudentComponent {
  student = {
    name: '',
    email: '',
    course: ''
  };

  students: any[] = [];

  onSubmit() {
    this.students.push({ ...this.student });
    this.student = { name: '', email: '', course: '' };
  }
}
