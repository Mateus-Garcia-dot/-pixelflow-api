import type { LED } from './types';
import type { Color , SetLEDInstruction, SetLEDRangeInstruction } from '../shared/bytecode';

function executeSetLED(leds: LED[], position: number, color: Color): void {
  leds[position] = {r: color.r, g: color.g, b: color.b };
}

export function executeSetLEDRange(leds: LED[], position_start: number, position_end: number, color: Color): void {
  for (let current_position = position_start; current_position <= position_end; current_position++) {
    executeSetLED(leds, current_position, color)
  }
}

export function executeDelay(leds: LED[], instruction: number): void {
  // No-op - delay is handled by the executor/device
}

export function executeSetAllLEDs(leds: LED[], color: Color): void {
  executeSetLEDRange(leds, 0, leds.length - 1, color);
}

export default { executeSetLED, executeSetLEDRange, executeDelay, executeSetAllLEDs };
