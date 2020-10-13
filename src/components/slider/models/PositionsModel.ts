import PositionsModelInterface from "./Interfaces/PositionsModel.interface";

export default class PositionsModel implements PositionsModelInterface {
  private listeners: Function[] = [];
  private positions: number[] = [];

  public getPositions(): number[] {
    return this.positions;
  }

  public setPositions(positions: number[]): void {
    this.positions = this.verifyPositions(positions);

    this.listeners.forEach((callback) => callback(this.positions));
  }

  public onChange(callback: Function): void {
    this.listeners.push(callback);
  }

  private verifyPositions(positions: number[]): number[] {
    return positions.map((position) => {
      if (position < 0) return 0;
      if (position > 100) return 100;

      return position;
    });
  }
}
