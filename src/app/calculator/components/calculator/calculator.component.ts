import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/shared/services/calculator.service';
import { Operator } from '../../models';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  public calculationString = '0';

  constructor(private calculatorService: CalculatorService) {}

  public handleButtonPress(value: string): void {
    switch (value) {
      case 'reset':
        this.resetCalculation();
        break;
      case Operator.Equals:
        this.calculate();
        break;
      default:
        this.addToCalculationString(value);
        break;
    }
  }

  private resetCalculation(): void {
    this.calculationString = '0';
  }

  private calculate(): void {
    const [operand1, operator, operand2] = this.calculationString.split(' ');
    const calculatedValue = this.calculatorService.calculate(
      operator as Operator,
      parseInt(operand1),
      parseInt(operand2)
    );
    this.calculationString = calculatedValue.toString();
  }

  private addToCalculationString(value: string): void {
    if (this.calculationString === '0') {
      this.calculationString = value;
    } else {
      this.calculationString += value;
    }
  }
}
