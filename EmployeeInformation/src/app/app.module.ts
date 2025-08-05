import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RecordsComponent } from './component/records/records.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddDataComponent } from './component/add-data/add-data.component';
import { EmployeeEditComponent } from './component/employee-edit/employee-edit.component';
// import { FormsModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RecordsComponent,
    AddDataComponent,
    EmployeeEditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
      HttpClientModule, 
    AppRoutingModule,
     FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
