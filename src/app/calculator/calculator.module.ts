import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { NumberpadComponent } from './components/numberpad/numberpad.component';
import { DisplayComponent } from './components/display/display.component';

@NgModule({
  declarations: [CalculatorComponent, NumberpadComponent, DisplayComponent],
  imports: [CommonModule],
  exports: [CalculatorComponent],
})
export class CalculatorModule {}
