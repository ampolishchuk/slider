export default interface ScaleModelInterface {
  getValueByPosition(position: number): any;
  getPositionOfValue(value: any): number;
}
