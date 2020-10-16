import PositionsModelInterface from "./interfaces/PositionsModel.interface";
import EventManager from "../eventManager/EventManager";

export default class PositionsModel
  extends EventManager
  implements PositionsModelInterface {
  private positions: number[] = [];
  private readonly MIN_POSITION: number = 0;
  private readonly MAX_POSITION: number = 100;

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
    positions = this.verifyMinMaxPositions(positions);
    positions = this.verifyRelationshipBetweenPositions(positions);

    return positions;
  }

  private verifyMinMaxPositions(positions: number[]): number[] {
    return positions.map((position) => {
      if (position < this.MIN_POSITION) return this.MIN_POSITION;
      if (position > this.MAX_POSITION) return this.MAX_POSITION;

      return position;
    });
  }

  private verifyRelationshipBetweenPositions(positions: number[]) {
    return positions.map((position, index) => {
      const nextPosition = this.positions[index + 1];
      const previousPosition = this.positions[index - 1];

      if (position > nextPosition) return nextPosition;
      if (position < previousPosition) return previousPosition;

      return position;
    });
  }
}
