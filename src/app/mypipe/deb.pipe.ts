import { Pipe, PipeTransform } from '@angular/core';
import { debounceTime } from 'rxjs';

@Pipe({
  name: 'deb',
})
export class DebPipe implements PipeTransform {
  transform(value: any) {
    debounceTime(1000)
      return value.toUppercase()
  }
}
