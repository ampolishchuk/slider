import ModelInterface from "../../interfaces/Model.interface";

export default class ModelDecorator implements ModelInterface {
  protected model: ModelInterface;

  constructor(model: ModelInterface) {
    this.model = model;
  }

  public setValues(values: any[]): void {
    this.model.setValues(values);
  }

  public setValuesByPositions(positions: number[]) {
    this.model.setValuesByPositions(positions);
  }

  public getValues(): any[] {
    return this.model.getValues();
  }

  public getPositions(): number[] {
    return this.model.getPositions();
  }
}
