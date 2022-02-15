import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { EditComponent } from './edit/edit.component';
import { AdminComponent } from './employees/admin/admin.component';
import { EmployeesComponent } from './employees/employees.component';
import { UsersComponent } from './employees/users/users.component';
import { GetComponent } from './get/get.component';

const routes: Routes = [
  {
    path: 'child',
    component: ChildComponent,
  },
  {path:'get',component:GetComponent},
  { path: '', redirectTo: '/get', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
