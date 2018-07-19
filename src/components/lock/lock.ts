import { Component } from '@angular/core';

/**
 * Generated class for the LockComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'lock',
  templateUrl: 'lock.html'
})
export class LockComponent {

  text: string;

  constructor() {
    console.log('Hello LockComponent Component');
    this.text = 'Hello World';
  }

}
