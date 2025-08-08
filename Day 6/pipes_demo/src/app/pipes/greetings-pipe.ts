import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greetings'
})
export class GreetingsPipe implements PipeTransform {

/*************  ✨ Windsurf Command ⭐  *************/
/*******  e372b946-a75d-4f35-a241-cf24a2f9d70f  *******/
transform(values:string):string{
  return 'Hello ' + values;
}

}
