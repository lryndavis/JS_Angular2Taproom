import {Component, EventEmitter} from 'angular2/core';
import {KegListComponent} from './keg-list.component';
import {Keg} from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
    <h1>Check Out All These Kegs</h1>
    <keg-list
    [kegList]="kegs"
    (onKegSelect)="kegWasSelected($event)">
    </keg-list>
    </div>
  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor() {
    this.kegs = [
      new Keg("1811 Beer", "Fort George Brewery",8, 60, 0),
      new Keg("Coors Light", "Gross",1, 5, 1),
      new Keg("IRA", "Double Mountain",8, 60, 2),
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log(clickedKeg);
  }
}
