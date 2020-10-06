export default interface PositionsModelInterface {
  setPositions(positions: number[]): void;
  getPositions(): number[];
  onChange(callback: Function): void;
}
