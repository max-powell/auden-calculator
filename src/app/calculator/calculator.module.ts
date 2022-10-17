import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { NumberpadComponent } from './components/numberpad/numberpad.component';
import { DisplayComponent } from './components/display/display.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CalculatorComponent, NumberpadComponent, DisplayComponent],
  imports: [CommonModule, SharedModule],
  exports: [CalculatorComponent],
})
export class CalculatorModule {}
