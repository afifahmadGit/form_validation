import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeesModule } from './employees/employees.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { GetComponent } from './get/get.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// materials
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from './material/material.module';
import { MypipePipe } from './mypipe/mypipe.pipe';
import { DebPipe } from './mypipe/deb.pipe';
import { TempDirective } from './temp.directive';
@NgModule({
  declarations: [AppComponent, ChildComponent, EditComponent, GetComponent, MypipePipe, DebPipe, TempDirective],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    EmployeesModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
