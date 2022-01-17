import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./employee";



@Injectable({
  //register your service as a provider in the root app.module.ts
  providedIn: 'root'
})
export class EmployeeService {
  private apiServerUrl = '';
/*
service gives the mirror of what is happening in the backend
you have to import the service on the component to be able to use it
1. inject the httpclient in the constructor
2. import the httpclient from the angular/common/http
 */
  constructor(private http: HttpClient) { }

  /*
  1.create your functions from the resource.java file which is in the backend
  2. the observable and the get methods are generic so we need to pass in parameters
  3.the return function tell the http what reuests and type of requests to make
   */
  public getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiServerUrl}/employee`);
  }
  public addEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(`${this.apiServerUrl}/employee/add`, employee);
  }
  public updateEmployee(employee: Employee): Observable<Employee>{
    return this.http.put<Employee>(`${this.apiServerUrl}/employee/update`, employee)
  }
  public deleteEmployee(employeeId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`);
  }
}


