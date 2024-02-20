import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, appRouting } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from './shared/services/shared.service';
import { EmployeeService } from './shared/services/employee.service';


@NgModule({
  declarations: [
    AppComponent,
    appRouting
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SharedService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
