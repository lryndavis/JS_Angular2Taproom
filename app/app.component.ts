import {Component, EventEmitter} from 'angular2/core';
import {KegListComponent} from './keg-list.component';
import {Keg} from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
    <h1>Keg Room</h1>
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
      new Keg("1811 Beer", "Fort George Brewery",8, 60, 1),
      new Keg("1811 Beer", "Fort George Brewery",8, 60, 2),
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log(clickedKeg);
  }
}
