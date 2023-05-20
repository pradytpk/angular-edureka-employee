import { Component } from '@angular/core';
import { IEmployee } from '../../Models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  public employees: IEmployee[] = [];
  public showEdit: boolean = false;

  EditEmp() {
    this.showEdit = true;
  }

  UpdateEmp() {
    this.showEdit = false;
  }
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
      }
    ]
  }
}
