import { Observable } from 'tns-core-modules/data/observable';
import { Googlemaps } from 'nativescript-googlemaps';

export class HelloWorldModel extends Observable {
  public message: string;
  private googlemaps: Googlemaps;

  constructor() {
    super();

    this.googlemaps = new Googlemaps();
    this.message = this.googlemaps.message;
  }
}