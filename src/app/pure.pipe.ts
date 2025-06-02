

import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'pure'
})
export class PurePipe implements PipeTransform {


  transform(value: any): unknown {
    return value*value;
  }


}
