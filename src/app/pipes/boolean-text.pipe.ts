import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanText'
})
export class BooleanTextPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
