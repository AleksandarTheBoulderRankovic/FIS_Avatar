import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'goldPipe'
})
export class GoldPipePipe implements PipeTransform {

  transform(value: number) {
    return 0.082*value + ' copper pieces';
  }

}
