import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'cabbagePatch'
})
export class CabbagePatchPipe implements PipeTransform {

  transform(value: string): string {

    let aca : string[] = [];

    value.split(" ").forEach((val : string) => { if(val.includes('cabbage') || val.includes('Cabbage') || val.includes('CABBAGE'))
                                                    aca.push(val + ' (MY CAABBAAGES!!!) ');
                                                  else
                                                    aca.push(val);
                                              });

    return aca.join(' ');
  }

}
