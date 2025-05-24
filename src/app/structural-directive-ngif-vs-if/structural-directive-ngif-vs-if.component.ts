

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-structural-directive-ngif-vs-if',
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-directive-ngif-vs-if.component.html',
  styleUrl: './structural-directive-ngif-vs-if.component.scss'
})
export class StructuralDirectiveNgifVsIfComponent {


  isCheked:boolean=false;


  isInputBox:boolean=true;


  input1:string='';
  input2:string='';


  clicked(){
    this.isCheked=!this.isCheked;
  }


  showField(){
this.isInputBox=true;
  }
  hideField(){
this.isInputBox=false;
  }
}

