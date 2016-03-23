import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component ({
  selector: 'keg-display',
  inputs:['keg'],
  template: `
  <div>
  <h4>{{ keg.beer }}</h4>
  <p>Brewery: {{ keg.brewery }}</p>
  <p>Alcohol Content: {{ keg.alcohol }}</p>
  <p>Price per Keg: {{ keg.price }}</p>
  <p>Pints Remaining: {{ keg.pint }}</p>
  </div>
  `
})

export class KegComponent {
  public keg: Keg;
}
