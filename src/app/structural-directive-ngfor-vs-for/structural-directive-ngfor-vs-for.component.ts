


import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-structural-directive-ngfor-vs-for',
  imports: [CommonModule],
  templateUrl: './structural-directive-ngfor-vs-for.component.html',
  styleUrl: './structural-directive-ngfor-vs-for.component.scss'
})
export class StructuralDirectiveNgforVsForComponent {


  employees:any[]=[
    {empid:123,empname:"sathya",empsal:2000,empadd:"hyd"},
    {empid:237,empname:"soma",empsal:6372,empadd:"klkta"},
    {empid:944,empname:"prakash",empsal:8373,empadd:"mumbai"},
  ];


  companyList:string[]=["capgemni","wipro","genpact","ibm"];
}