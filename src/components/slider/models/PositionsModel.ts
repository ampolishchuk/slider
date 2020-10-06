import PositionsModelInterface from "../interfaces/PositionsModel.interface";

export default class PositionsModel implements PositionsModelInterface {
  private listeners: Function[] = [];
  private positions: number[] = [];

  public getPositions(): number[] {
    return this.positions;
  }

  public setPositions(positions: number[]): void {
    this.positions = positions;

    this.listeners.forEach((callback) => callback(this.positions));
  }

  public onChange(callback: Function): void {
    this.listeners.push(callback);
  }
}
