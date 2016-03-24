import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';
import {SortPipe} from './sort.pipe';

@Component ({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [SortPipe],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  template: `
  <h3>Sort by Amount:</h3>
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all">Show All</option>
    <option value="low">Low</option>
  </select>
  <keg-display *ngFor="#currentKeg of kegList | sort:filterSort"
  (click)="kegClicked(currentKeg)"
  [class.selected]="currentKeg === selectedKeg"
  [keg]="currentKeg">
  </keg-display>
  <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg">
  </edit-keg-details>
  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterSort: string = "all";
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(keg:Keg): void {
    this.kegList.push(keg);
  }
  onChange(filterOption) {
    this.filterSort = filterOption;
  }
}
