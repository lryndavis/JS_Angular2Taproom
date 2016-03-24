import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
  <div>
  <h3>Edit Keg Info for {{ keg.beer }}:</h3>
  <fieldset class="form-group">
  <input [(ngModel)]="keg.beer" class="col-sm-8 input-lg keg-form" class="form-control"/>
  </fieldset>
  <fieldset class="form-group">
  <input [(ngModel)]="keg.brewery" class="col-sm-8 input-lg keg-form" class="form-control"/>
  </fieldset>
  <fieldset class="form-group">
  <input [(ngModel)]="keg.alcohol" class="col-sm-8 input-lg keg-form" class="form-control"/>
  </fieldset>
  <fieldset class="form-group">
  <input [(ngModel)]="keg.price" class="col-sm-8 input-lg keg-form" class="form-control"/>
  </fieldset>
  </div>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
