import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private _router: Router){
   }

  
   onLogin() {
    // Handle login logic here
    alert('Login button clicked!');
    this._router.navigate(['/records']);
  }
}
