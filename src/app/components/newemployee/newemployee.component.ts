import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { IEmployee2 } from '../../Models/employee2'

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css']
})
export class NewemployeeComponent {
  public employees: IEmployee2[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees()
      .subscribe(data => {
        this.employees = data;
      });
  }

}







