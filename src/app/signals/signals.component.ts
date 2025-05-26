


import { Component, effect, signal, WritableSignal } from '@angular/core';


@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {


  counter=signal(0)
  //counter:WritableSignal=signal(0)


  //create constructor
  constructor(){
    this.counter.set(6);
    //effect function call when changes happen
 effect(()=>console.log("the counter value is :"+this.counter()))
  }


  onIncreament(){
    this.counter.update(value =>value+1)
  }
}