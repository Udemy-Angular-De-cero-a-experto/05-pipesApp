import { Pipe, PipeTransform } from '@angular/core';

// STRING | toogleCase = 'string'
// string | toogleCase = 'STRING'

@Pipe({
  name: 'toogleCase'
})
export class ToogleCasePipe implements PipeTransform {
  transform( value: string, toUpper: boolean = false ): string {

    console.log({ value, toUpper });

    return (toUpper)
      ? value.toUpperCase()
      : value.toLowerCase();
  }
}
