import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeInformation';

   constructor(private _router: Router){}
   headData = [
  { label: 'Home', path: 'header' },
  
  { label: 'Employee_Data', path: 'login' },

  // { label: 'Contact', path: 'contact' },
  
  
  
];

 homeClick()
  {
    this._router.navigate(['/header']);
  }

  loginClick()
  {
        this._router.navigate(['/login']);

  }
}
