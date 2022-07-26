import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
@Output()employeeAdded=new EventEmitter<{name:string, age:number, gender:string}>();
  
empName='';
empAge=0;
empGender='';


 constructor() { }

  ngOnInit(): void {
  }

  addEmployee(){
  this.employeeAdded.emit({name:this.empName, age:this.empAge, gender:this.empGender})

  }

  

}
