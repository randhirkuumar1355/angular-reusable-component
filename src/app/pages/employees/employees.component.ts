import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/services/employee.service';
import { FormBuilder } from '@angular/forms';
import { Employee } from '../../shared/models/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];
  selectedEmployeeCountRadioButton: string = 'All';

  constructor(private fb: FormBuilder, private empService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  //Get all employees
  public getEmployees(){
    this.empService.getEmployees().subscribe((respData: any) => {
      if(respData.length>0){
        this.employees = respData;
        console.log();
      }
    });
  }

  //Get totalEmployee count
  public getTotalEmployeesCount(): number {
    return this.employees.length;
  }

  //Get Male Employee count
  public getMaleEmployeesCount(): number {
    return this.employees.filter(x => x.gender === "Male").length;
  }

  //Get Female Employee count
  public getFemaleEmployeesCount(): number {
    return this.employees.filter(x => x.gender === "Female").length;
  }

  onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string) {
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
  }
}
