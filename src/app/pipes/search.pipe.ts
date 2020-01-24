import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val)  => {
      return (val.id.toString().toLocaleLowerCase().includes(args)) ||
        (val.title.toLocaleLowerCase().includes(args)) || (val.title.includes(args));
    });
  }

}
