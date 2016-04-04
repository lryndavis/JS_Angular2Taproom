import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="col-md-4">
    <h3>Add a new Keg:</h3>
    <fieldset class="form-group">
      <input placeholder="Type of Beer" class="col-sm-8 input-lg" #newBeer class="form-control">
    </fieldset>
    <fieldset class="form-group">
      <input placeholder="Brewery" class="col-sm-8 input-lg" #newBrewery class="form-control">
    </fieldset>
    <fieldset class="form-group">
      <input placeholder="Alcohol Content" class="col-sm-8 input-lg" #newAlcohol class="form-control">
    </fieldset>
    <fieldset class="form-group">
      <input placeholder="Price" class="col-sm-8 input-lg" #newPrice class="form-control">
    </fieldset>
  <button (click)="addKeg(newBeer, newBrewery, newAlcohol, newPrice)" class=" btn btn-default btn-block add-button">Add</button>
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
    var newBeer = new Keg(userBeer.value, userBrewery.value, parseInt(userAlcohol.value), parseInt(userPrice.value));
    this.onSubmitNewKeg.emit(newBeer);
    userBeer.value = "";
    userBrewery.value = "";
    userAlcohol.value = "";
    userPrice.value = "";
  }
}
