import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { NewKegComponent } from './new-keg.component';

@Component ({
  selector: 'keg-list',
  inputs: ['kegList'],
  directives: [NewKegComponent],
  template: `
  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
})

export class KegListComponent {
  public kegList: Keg[];

  createKeg(beer:string , brewery:string , alcohol: number, price: number): void {
    this.kegList.push(
      new Keg(beer, brewery, alcohol, price, this.kegList.length)
    );
  }
}
