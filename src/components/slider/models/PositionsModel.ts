import PositionsModelInterface from "./interfaces/PositionsModel.interface";
import EventManager from "../eventManager/EventManager";

export default class PositionsModel
  extends EventManager
  implements PositionsModelInterface {
  private positions: number[] = [];

  public getPositions(): number[] {
    return this.positions;
  }

  public setPositions(positions: number[]): void {
    this.positions = this.verifyPositions(positions);

    this.notify("onChange", this.positions);
  }

  public onChange(callback: Function): void {
    this.subscribe("onChange", callback);
  }

  private verifyPositions(positions: number[]): number[] {
    return positions.map((position) => {
      if (position < 0) return 0;
      if (position > 100) return 100;

      return position;
    });
  }
}
