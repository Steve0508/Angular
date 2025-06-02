

import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../user';
import { CommonModule ,JsonPipe} from '@angular/common';


@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent implements OnInit{


 userObject:User={}; //user object


 onSubmit(userForm:NgForm)
 {
  console.log(userForm.value)
 }


 //life cycle hook
 ngOnInit(): void {
    //  this.userObject={
    //    firstName:"keerthi",
    // lastName:"suresh",
    // email:"keerthi@gmail.com",
    // pass:"keerthi123",
    // isCheck:true,
     //}
 }


 setValues(userForm:NgForm){
  let obj={
     firstName:"keerthi",
    lastName:"suresh",
    email:"keerthi@gmail.com",
    pass:"keerthi123",
    isCheck:true,
  }
  userForm.setValue(obj);
 }


patchValues(userForm:NgForm)
{
  let obj={
     firstName:"keerthi",
    lastName:"suresh",
    email:"keerthi@gmail.com",
    
  }
  userForm.control.patchValue(obj);
}


resetValues(userForm:NgForm)
{
  userForm.reset();
}



}