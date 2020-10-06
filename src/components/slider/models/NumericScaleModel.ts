import ScaleModelInterface from "./Interfaces/ScaleModel.interface";

export default class NumericScaleModel implements ScaleModelInterface {
  private readonly min: number;
  private readonly max: number;
  private readonly step: number;

  constructor(scale: any[]) {
    this.min = scale[0];
    this.max = scale[scale.length - 1];
    this.step = (this.max - this.min) / 100;
  }

  public getPositionOfValue(value: any): number {
    return (value - this.min) / this.step;
  }

  public getValueByPosition(position: number): any {
    return this.min + position * this.step;
  }
}
