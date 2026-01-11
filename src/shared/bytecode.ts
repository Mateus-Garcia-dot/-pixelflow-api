export interface Color {
  r: number;
  g: number;
  b: number;
}

export interface SetLEDInstruction {
  op: 'SET_LED';
  position: number;
  color: Color;
}

export interface SetLEDRangeInstruction {
  op: 'SET_LED_RANGE';
  start: number;
  end: number;
  color: Color;
}

export interface DelayInstruction {
  op: 'DELAY';
  ms: number;
}

export type Instruction =
  | SetLEDInstruction
  | SetLEDRangeInstruction
  | DelayInstruction;

export interface Program {
  instructions: Instruction[];
}
