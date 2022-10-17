import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorService } from './services/calculator.service';

@NgModule({
  providers: [CalculatorService],
  imports: [CommonModule],
})
export class SharedModule {}
