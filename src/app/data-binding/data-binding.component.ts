import { Component } from'@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {


  name:string="Angular course";
  firstname:string="keerthi";
  lastname:string="suresh";
  quantity:number=21;
  today=new Date();


  user={
    name:'keerthi suresh',
    age:33
  };


// property binding 
linkedin="https://www.linkedin.com/feed/";
isButtonDisabled:boolean=false;
fontSize="30px";


//event binding


onClick(){
  alert("you clicked the button....")
}


onMouseEnter(){
  alert("you enetrd inside div....")
}
onMouseLeave(){
  alert("you out of  div....")
}
//ng model    two way data binding
val:string="";


isCheked:boolean=false;
}