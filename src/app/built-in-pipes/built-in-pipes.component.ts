

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { CustomPipe } from '../custom.pipe';
import { PurePipe } from '../pure.pipe';
import { ImpurePipe } from '../impure.pipe';


@Component({
  selector: 'app-built-in-pipes',
  imports: [CommonModule,CustomPipe,PurePipe,ImpurePipe],
  templateUrl: './built-in-pipes.component.html',
  styleUrl: './built-in-pipes.component.scss'
})
export class BuiltInPipesComponent {


 mobileNumber:any=7729938257;


  angularPipes:string="use pipes to format data in angulat template";


  personData={
    name:'keerthi',
    age:32,
    city:"kochi"
  }


  currentDate:Date=new Date();


  items=of(['apple','orange','kiwi','banna'])
}

