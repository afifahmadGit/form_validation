import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';
import { EmployeesComponent } from './employees.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[

  ]
})
export class EmployeesModule { }
