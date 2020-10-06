import ModelFacadeInterface from "../Interfaces/ModelFacade.interface";
import ValuesModelInterface from "../Interfaces/ValuesModel.interface";
import PositionsModelInterface from "../Interfaces/PositionsModel.interface";
import ScaleModelInterface from "../Interfaces/ScaleModel.interface";

export default class ModelFacade implements ModelFacadeInterface {
  private values: ValuesModelInterface;
  private positions: PositionsModelInterface;
  private scale: ScaleModelInterface;

  constructor(
    valuesModel: ValuesModelInterface,
    positionsModel: PositionsModelInterface,
    scaleModel: ScaleModelInterface
  ) {
    this.values = valuesModel;
    this.positions = positionsModel;
    this.scale = scaleModel;
  }

  public setValues(values: any[]) {
    this.values.setValues(values);

    this.updatePositions();
  }

  public setPositions(positions: number[]): void {
    this.positions.setPositions(positions);

    this.updateValues();
  }

  public onValuesChange(callback: Function) {
    this.values.onChange(callback);
  }

  public onPositionsChange(callback: Function): void {
    this.positions.onChange(callback);
  }

  private updateValues() {
    const values = this.positions
      .getPositions()
      .map((position) => this.scale.getValueByPosition(position));

    this.values.setValues(values);
  }

  private updatePositions() {
    const positions = this.values
      .getValues()
      .map((value) => this.scale.getPositionOfValue(value));

    this.positions.setPositions(positions);
  }
}
