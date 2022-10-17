import { TestBed } from '@angular/core/testing';
import { Operator } from 'src/app/calculator/models';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  describe('calculate', () => {
    it('should calculate the result of two operators based on the operand provided', () => {
      interface TestScenario {
        inputs: { operator: Operator; operand1: number; operand2: number };
        expectedResult: number;
      }
      const tests: TestScenario[] = [
        {
          inputs: { operator: Operator.Multiply, operand1: 20, operand2: 20 },
          expectedResult: 400,
        },
        {
          inputs: { operator: Operator.Add, operand1: 45, operand2: 45 },
          expectedResult: 90,
        },
        {
          inputs: { operator: Operator.Divide, operand1: 20, operand2: 5 },
          expectedResult: 4,
        },
        {
          inputs: { operator: Operator.Subtract, operand1: 100, operand2: 20 },
          expectedResult: 80,
        },
      ];

      tests.forEach(({ inputs, expectedResult }) =>
        expect(
          service.calculate(inputs.operator, inputs.operand1, inputs.operand2)
        ).toEqual(expectedResult)
      );
    });
  });
});
