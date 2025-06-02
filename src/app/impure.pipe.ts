import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'impure'
})
export class ImpurePipe implements PipeTransform {


  currentDate:string=new Date().toLocaleTimeString();
  transform(value: any, ...args: any[]): any {
    return this.currentDate ;
  }


}
