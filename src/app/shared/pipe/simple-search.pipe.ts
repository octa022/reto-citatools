import { Pipe, PipeTransform } from '@angular/core';
import { toLower } from 'lodash';

@Pipe({
  name: 'simpleSearch'
})
export class SimpleSearchPipe implements PipeTransform {
  transform(value: any, args: string): any {
    const result = [];
    for(const list of value){
      const name = toLower(list.name).trim();
      if(name.indexOf(toLower(args).trim()) > -1){
         result.push(list);
      };
    };
    return result;
  }
}
