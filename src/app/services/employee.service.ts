import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee2 } from '../Models/employee2'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private apiUrl = '';
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee2[]> {
    return this.http.get<IEmployee2[]>(this.apiUrl);
  }
}
