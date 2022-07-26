import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
// employeeList:[{name:string, age:number, gender:string}]=[{name:'',age:0,gender:''}];
employeeList=[
  {name:'John Doe', age:23, gender:'M'},
  {name:'Joane Doe', age:23, gender:'F'},
  {name:'Ash Lynx', age:23, gender:'M'}
]

  constructor() { }

  ngOnInit(): void {
  }

  onEmployeeAdded(employeeData:{name:string, age:number, gender:string}){
    this.employeeList.push({
      name:employeeData.name,
      age:employeeData.age,
      gender:employeeData.gender
    })
  
  }
 

}
