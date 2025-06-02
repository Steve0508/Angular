

import { CommonModule } from '@angular/common';
import { Component, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-life-cycle-hooks',
  imports: [CommonModule],
  templateUrl: './life-cycle-hooks.component.html',
  styleUrl: './life-cycle-hooks.component.scss'
})
export class LifeCycleHooksComponent implements OnChanges {



  constructor()
  {
    console.log("constructor:component instance created :  1");
  }
  ngOnChanges(changes: SimpleChanges):void
  {
    console.log("ngOnChnages :input properties are changed :   2",changes)
  }
  ngOnInit():void{
    console.log("component is initialized...:   3");
  }
  ngDoCheck():void{
     console.log("ngDocheck:change detection cycle run..:  4");
  }
  ngAfterContentInit():void{
    console.log("ngAfterContentInit:content projected:   5");
  }
  ngAfterContentChecked():void{
    console.log("ngAfterContentChecked :content is cheked:   6");
  }
  ngAfterViewInit():void{
    console.log("ngAfterViewInit :view is initilized...     7");
  }
  ngAfterViewChecked():void{
    console.log("ngAfterViewChecked :view is checked    8")
  }


  ngOnDestroy():void
  {
   console.log("ngOnDestroy : component is destroyed ..cleaned     9");
  }
}