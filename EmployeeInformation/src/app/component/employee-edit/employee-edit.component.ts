import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent {
 employeeForm!: FormGroup;
  empId: string = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.empId = this.route.snapshot.paramMap.get('id') || '';

    this.employeeForm = this.fb.group({
      id: [''],
      firstname: [''],
      lastname: [''],
      role: [''],
      salary: [0],
      phonenbr: [0],
      email: [''],
      location: [''],
      project: ['']
    });

    if (this.empId) {
      this.employeeService.getEmployeeById(this.empId).subscribe({
        next: (data) => {
          this.employeeForm.patchValue(data); // Populate the form
        },
        error: (err) => {
          console.error('Failed to fetch employee:', err);
          alert('Error fetching employee details!');
        }
      });
    } else {
      alert('Invalid employee ID!');
    }
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      this.employeeService.updateEmployee(this.empId, this.employeeForm.value)
        .subscribe({
          next: () => {
            alert('Employee Updated Successfully!');
            this.router.navigate(['/records']);
          },
          error: (err) => {
            alert('Update Failed!');
            console.error(err);
          }
        });
    }
  }
}
