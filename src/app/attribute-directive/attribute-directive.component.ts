

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-attribute-directive',
  imports: [CommonModule,FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.scss'
})
export class AttributeDirectiveComponent {


  //1
  textColor:string='text-success';
  
  changeColor(color:string)
  {
    this.textColor=color;
  }


//2
isTextGreen:boolean=true;
//3
useClass:string='';
}

