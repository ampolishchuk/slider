export default interface ModelInterface {
  setValues(values: any[]): void;
  setValuesByPositions(positions: number[]): void;
  getValues(): any[];
  getPositions(): number[];
}
