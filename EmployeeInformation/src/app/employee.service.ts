import { Injectable } from '@angular/core';
import { Employee } from './models/employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // constructor() { }

    private baseUrl = 'http://localhost:8080/api/employee';  

  constructor(private http: HttpClient) {}

  // Get all employees
  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}`);
  }

  



 
  // Add new employee
  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.baseUrl}`, employee);
  }

  getEmployeeById(id: string): Observable<Employee> {
  return this.http.get<Employee>(`${this.baseUrl}/${id}`);
}


  // Update employee
  updateEmployee(id: string, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.baseUrl}/${id}`, employee);
  }

  
  // Delete employee
  // deleteEmployee(id: string): Observable<void> {
  //   return this.http.delete<void>(`${this.baseUrl}/${id}`);
  // }

 deleteEmployee(id: string) {
  return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
}



}
