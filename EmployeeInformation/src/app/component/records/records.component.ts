import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent {
  constructor(
    private _router: Router,
    private employeeService: EmployeeService
  ) {}
  employees: Employee[] = []; // Table data
  errorMessage = '';

  showForm = false; // Toggle form visibility
  isEdit = false;
  editIndex: number = -1;

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

getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe(data => {
      this.employees = data;
    });
  }
addEmployee() {
    this._router.navigate(['/add-data']);
  }
  


  

  updateEmployee(id: string) {
  this._router.navigate(['/employee-edit', id]);
}



 

ngOnInit(): void {
   this.employeeService. getAllEmployees().subscribe({
     next: data => this.employees = data,
        error: err => {
          console.error(err);
          this.errorMessage = 'Failed to load Veg‑Biryani items.';
          alert("something went wrong!")
        }
   });
  }
  

   deleteEmployee(id: string): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id).subscribe({
        next: (res) => {
          alert('Employee deleted successfully!');
          this.getAllEmployees(); // Refresh the list after deletion
        },
        error: (err) => {
          alert('Delete failed!');
          console.error(err);
        }
      });
    }
  }





  
}
