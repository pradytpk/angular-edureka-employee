import { Component } from '@angular/core';
import { IEmployee } from '../../Models/employee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  public employees: IEmployee[] = [];

  constructor() {
  }
  public ngOnInit(): void {
    this.employees = [
      {
        employeeID: 1,
        firstName: 'John',
        lastName: 'Doe',
        salary: 5000,
        dob: new Date(1990, 5, 15),
        email: 'john.doe@example.com'
      },
      {
        employeeID: 2,
        firstName: 'Jane',
        lastName: 'Smith',
        salary: 6000,
        dob: new Date(1992, 8, 25),
        email: 'jane.smith@example.com'
      },
    ]
  }

}
