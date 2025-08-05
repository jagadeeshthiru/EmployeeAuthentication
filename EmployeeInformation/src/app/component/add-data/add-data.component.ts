import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/models/employee';
// import { EmployeeService } from 'src/app/employee.service';
// import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent {
newEmployee: Employee = {
    id: '',
    firstname: '',
    lastname: '',
    role: '',
    salary: 0,
    phonenbr: 0,
    email: '',
    location: '',
    project: ''

  };

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

onSubmit() {
  this.employeeService.addEmployee(this.newEmployee).subscribe(
    (response) => {
      console.log('Employee added:', response);
      this.router.navigate(['/records']); 
      alert("Employee added successfully!")
    },
    (error) => {
      console.error('Error adding employee:', error);
    }
  );
}

}
