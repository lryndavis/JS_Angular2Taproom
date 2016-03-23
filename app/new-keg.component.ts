import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
    <h3>Add a new Keg:</h3>
    <input placeholder="Type of Beer" class="col-sm-8 input-lg" #newBeer>
    <input placeholder="Brewery" class="col-sm-8 input-lg" #newBrewery>
    <input placeholder="Alcohol Content" class="col-sm-8 input-lg" #newAlcohol>
    <input placeholder="Price" class="col-sm-8 input-lg" #newPrice>
    <button (click)="addKeg(newBeer, newBrewery, newAlcohol, newPrice)" class="btn-success btn-lg add-button">Add</button>
    </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<Keg>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userBeer: HTMLInputElement, userBrewery: HTMLInputElement,
    userAlcohol: HTMLInputElement, userPrice: HTMLInputElement) {
    this.onSubmitNewKeg.emit([userBeer.value, userBrewery.value, userAlcohol.value, userPrice.value]);
    userBeer.value = "";
    userBrewery.value = "";
    userAlcohol.value = "";
    userPrice.value = "";
  }
}
