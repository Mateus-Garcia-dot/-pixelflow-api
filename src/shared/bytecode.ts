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

export type Instruction = SetLEDInstruction;

export interface Program {
  instructions: Instruction[];
}
