import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from './keg.model';

@Pipe({
  name: "sort",
  pure: false
})
export class SortPipe implements PipeTransform {
  transform(input: Keg[], args){
    var desiredSortState = args[0];
    if (desiredSortState === "low"){
        return input.filter((keg) => {
        return (keg.pint <= 120);
      });
    } else {
      return input;
    }
  }
}



// if(desiredSortState === "lowLevel") {
//       if (this.keg.checkLevel() === "low") {
//         return input.filter((keg) => {
//         return this.keg;
//       }
//     });
//   } else {
//     return input;
//   }
