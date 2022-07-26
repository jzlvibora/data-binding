import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
@Output()employeeAdded=new EventEmitter<{name:string, age:number, gender:string}>();
  
// empName='';
// empAge=0;
// empGender='';

@ViewChild('empAgeInput') empAgeInput!:ElementRef
@ViewChild('empGenderInput') empGenderInput!:ElementRef

 constructor() { }

  ngOnInit(): void {
  }

  addEmployee(nameInput:HTMLInputElement){
  // this.employeeAdded.emit({name:this.empName, age:this.empAge, gender:this.empGender})
  this.employeeAdded.emit({name:nameInput.value, age:this.empGenderInput.nativeElement.value, gender:this.empGenderInput.nativeElement.value})

  }

  

}
