import { Injectable } from '@angular/core';
import { Operator } from 'src/app/calculator/models';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  public calculate(
    operator: Operator,
    operand1: number,
    operand2: number
  ): number {
    switch (operator) {
      case Operator.Add:
        return operand1 + operand2;
      case Operator.Subtract:
        return operand1 - operand2;
      case Operator.Multiply:
        return operand1 * operand2;
      case Operator.Divide:
        return operand1 / operand2;
      default:
        return 0;
        break;
    }
  }
}
