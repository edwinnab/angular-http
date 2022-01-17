import {Component, OnInit} from '@angular/core';
import {Employee} from "./employee";
import {EmployeeService} from "./employee.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /*
  define a variable that will hold all the employee details
  we can access the variable through the template component, in this case the app.component.html
  inject the service in the constructor
   */

   employees?: Employee[];
   employee?: any;
   constructor( private employeeService: EmployeeService){}
  //calls the function when ever the component is initialized

  ngOnInit() {
     this.getEmployees();
  }
  //the reason for using void is because it doesnot return anything
  getEmployees(): void{
     //this is an observable thus it makes some request over the internet and thus the need to subscribe to it
     this.employeeService.getEmployees().subscribe(
       //specify the response
       (response: Employee[]) => {
         this.employees = response;
       },
       //we have to give the type of error
       (error: HttpErrorResponse) => {
         alert(error.message);
       }
     );
  }






}
