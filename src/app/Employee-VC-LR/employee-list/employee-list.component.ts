import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @Input() emp!:{name:string, age:number, gender:string}

  constructor() { }

  ngOnInit(): void {
  }

}
