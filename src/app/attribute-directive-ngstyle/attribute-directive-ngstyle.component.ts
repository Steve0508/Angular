
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-attribute-directive-ngstyle',
  imports: [CommonModule,FormsModule],
  templateUrl: './attribute-directive-ngstyle.component.html',
  styleUrl: './attribute-directive-ngstyle.component.scss'
})
export class AttributeDirectiveNgstyleComponent {


  styleColor:string="orange";


  updateColor(ngStyleColor:string){
    this.styleColor=ngStyleColor;
  }
  //2 
  isTextDanger:boolean=false;


  //3
  userStyle:string='';
}
