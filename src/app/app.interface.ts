export interface Element {
  id: string;
  type: ElementType;
  name: string;
}

export interface Step {
  id: string;
  markup: string;
  elements: Element[];
}

export enum ElementType {
  TEXT = 1,
  NUMERIC = 2
}
