import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { RecordsComponent } from './component/records/records.component';
import { AddDataComponent } from './component/add-data/add-data.component';
import { EmployeeEditComponent } from './component/employee-edit/employee-edit.component';

const routes: Routes = [
{ path: '', redirectTo:'/header',pathMatch:'full'},
{path:'header',component:HeaderComponent},
{path:'login',component:LoginComponent},
{path:'records',component:RecordsComponent},
{path:'add-data',component:AddDataComponent},
{ path: 'employee-edit/:id', component: EmployeeEditComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
