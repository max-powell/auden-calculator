import { Component, EventEmitter, Output } from '@angular/core';
import {
  NumberpadButtonConfig,
  Operator,
} from '../../models';

@Component({
  selector: 'app-numberpad',
  templateUrl: './numberpad.component.html',
  styleUrls: ['./numberpad.component.scss'],
})
export class NumberpadComponent {
  @Output() buttonPress = new EventEmitter<string>();

  public numberpadConfig: NumberpadButtonConfig[] = [
    { text: 'C', value: 'reset', wide: true },
    { text: Operator.Divide, value: ` ${Operator.Divide} `, operator: true },
    { text: '7', value: '7' },
    { text: '8', value: '8' },
    { text: '9', value: '9' },
    {
      text: Operator.Multiply,
      value: ` ${Operator.Multiply} `,
      operator: true,
    },
    { text: '4', value: '4' },
    { text: '5', value: '5' },
    { text: '6', value: '6' },
    {
      text: Operator.Subtract,
      value: ` ${Operator.Subtract} `,
      operator: true,
    },
    { text: '1', value: '1' },
    { text: '2', value: '2' },
    { text: '3', value: '3' },
    { text: Operator.Add, value: ` ${Operator.Add} `, operator: true },
    { text: '0', value: '0', wide: true },
    { text: Operator.Equals, value: Operator.Equals },
  ];

  public handleButtonPress(value: string): void {
    this.buttonPress.emit(value);
  }
}
