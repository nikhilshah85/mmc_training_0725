import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gendergreeting'
})
export class GendergreetingPipe implements PipeTransform {

  transform(value:string, gender:string):string
  {
    if(gender == 'Male')
    {
      return 'Mr. ' + value;
    }
    else
    {
      return 'Mrs. ' + value;
    }
  }

}
