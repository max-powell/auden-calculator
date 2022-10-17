import { NumberpadButtonModifier } from './numberpad-button-modifier.enum';

export interface NumberpadButtonConfig {
  wide?: boolean;
  operator?: boolean;
  text: string;
  value: string;
}
