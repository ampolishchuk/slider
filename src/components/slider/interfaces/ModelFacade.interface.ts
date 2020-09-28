export default interface ModelFacadeInterface {
  setValues(values: any[]): void;
  setValuesByPositions(positions: number[]): void;
  getPositions(): number[];
}
