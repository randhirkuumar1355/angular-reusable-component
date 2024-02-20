import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Employee } from '../models/employee';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:3000'

  constructor(private sharedService: SharedService) { }

  public getEmployees() {
    return this.sharedService.get(this.baseUrl + '/posts').pipe(catchError(this.errorHandler));
  } 

  errorHandler(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
