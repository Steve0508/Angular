

import { Component,signal,computed, linkedSignal } from '@angular/core';


@Component({
  selector: 'app-linked-signals',
  imports: [],
  templateUrl: './linked-signals.component.html',
  styleUrl: './linked-signals.component.scss'
})
export class LinkedSignalsComponent {


  qunatitySignals=signal(17);  //writable signal
  price=10;
  
  //compued signal
  // total=computed(()=>{
  //   return this.qunatitySignals()*this.price;
  // });


//instead of using computed signal will go for linked signal working same


// total=linkedSignal(()=>{
//   return this.qunatitySignals()*this.price;
// })
//linkedd signal with source and computtion


total =linkedSignal({
  source:this.qunatitySignals,
  computation:()=>this.qunatitySignals()*this.price,


})
calculated(){
  this.qunatitySignals.set(73);
}
}
