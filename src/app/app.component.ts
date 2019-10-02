import { Component } from '@angular/core';
import { NumberButtons } from './buttons/number-buttons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculate';
  public userData: string = '0';
  public firstOperand: string;
  public secondOperand: string;
  public operation: ()=>{};
  public buttons: Array<NumberButtons>;
  public isDisabled: boolean;
  public result: string;
  constructor() {
    this.buttons = this.getButtons();
  }
  public methodSum():void {
    let c =  +this.firstOperand + +this.secondOperand;
    this.result = '' + c;
  }
  public methodMultiply():void {
    let a = +this.firstOperand * +this.secondOperand;
    this.result = '' + a;
  }
  public methodMinus():void {
    let b = +this.firstOperand - +this.secondOperand;
    this.result = '' + b;
  }
  public parseUserDataToArr ():void {
    let userArr = [];
    userArr = this.userData.split('');
    console.log(userArr);
  }
  public getButtons(): Array<NumberButtons> {
    return [
      { index: ',' , value: '.'},
      { index: 0 , value: 0},
      { index: 1 , value: 1},
      { index: 2 , value: 2},
      { index: 3 , value: 3},
      { index: 4 , value: 4},
      { index: 5 , value: 5},
      { index: 6 , value: 6},
      { index: 7 , value: 7},
      { index: 8 , value: 8},
      { index: 9 , value: 9},
    ]
  }
  public insertData(value): void {
    if (+this.userData === 0) {
      this.userData = '';
    }
    this.userData = this.userData + value;
  }
  public chooseOperation(action): void {

    this.isDisabled=false;
    this.operation = this[action];
    if (!this.firstOperand) {
      this.firstOperand = this.userData;
      this.userData= '0';
    }
    this.userData= '0';
  }
  public calculate ():void {
    this.secondOperand = this.userData;
    this.operation();
    this.userData = this.result;
    this.firstOperand = this.result;
  }
}
