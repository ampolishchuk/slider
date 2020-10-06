export default interface ModelFacadeInterface {
  setValues(values: any[]): void;
  setPositions(positions: number[]): void;
  onValuesChange(callback: Function): void;
  onPositionsChange(callback: Function): void;
}
