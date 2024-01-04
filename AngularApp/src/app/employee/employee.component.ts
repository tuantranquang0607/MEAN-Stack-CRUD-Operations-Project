import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../shared/employee.service'; // Step 1: Import EmployeeService

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService] // Step 2: Add EmployeeService to providers
})
export class EmployeeComponent implements OnInit {
  constructor(private employeeService: EmployeeService) { } // Step 3: Inject EmployeeService into constructor

  ngOnInit() {

  }
}
