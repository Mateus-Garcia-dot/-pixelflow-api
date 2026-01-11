import type { LED } from './types';
import type { Program } from '../../shared/bytecode';

export class Runner {
  private leds: LED[];

  constructor(ledCount: number) {
    this.leds = Array(ledCount).fill(null).map(() => ({
      r: 0,
      g: 0,
      b: 0
    }));
  }

  run(bytecode: Program): LED[] {
    for (const instruction of bytecode.instructions) {
      if (instruction.op === 'SET_LED') {
        this.leds[instruction.position] = instruction.color;
      }
    }
    return this.leds;
  }
}
