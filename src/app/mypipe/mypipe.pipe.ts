import { Pipe, PipeTransform } from '@angular/core';
import { debounceTime } from 'rxjs';

@Pipe({
  name: 'mypipe',
})
export class MypipePipe implements PipeTransform {
  transform(value: any, search: any) {
    
    if (search == null) {
      return value;
    } else {
      search = search.toLowerCase();
      return value.filter(function (ret: any,) {
        return ret.name.toLowerCase().indexOf(search) > -1;
      });
    }
  }
}
