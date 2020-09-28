import ModelInterface from "../interfaces/Model.interface";

export default class Model implements ModelInterface {
  private readonly points: number[];
  private values: any[] = [];

  constructor(points = [0, 100]) {
    this.points = points;
  }

  public setValues(values: any[]): void {
    this.values = values;
  }

  public setValuesByPositions(positions: number[]) {
    this.values = positions.map((position) => {
      const valueRange = this.points[this.points.length - 1] - this.points[0];

      return this.points[0] + position * (valueRange / 100);
    });
  }

  public getValues(): any[] {
    return this.values;
  }

  public getPositions(): number[] {
    return this.values.map((value) => {
      const valueRange = this.points[this.points.length - 1] - this.points[0];

      return (value - this.points[0]) / (valueRange / 100);
    });
  }
}
