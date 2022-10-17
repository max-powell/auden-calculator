import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/shared/services/calculator.service';
import {
  NumberpadButtonConfig,
  NumberpadButtonModifier,
  Operator,
} from '../../models';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  public displayValue: string = '0';

  constructor(private calculatorService: CalculatorService) {}

  public ngOnInit(): void {
    this.displayValue = this.calculatorService
      .calculate(Operator.Add, 20, 20)
      .toString();
  }
}
