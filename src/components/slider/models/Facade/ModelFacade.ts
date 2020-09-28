import ModelInterface from "../../interfaces/Model.interface";
import ModelFacadeInterface from "../../interfaces/ModelFacade.interface";
import ObserverInterface from "../../interfaces/Observer.interface";

export default class ModelFacade implements ModelFacadeInterface {
  private observer: ObserverInterface;
  private model: ModelInterface;

  constructor(observer: ObserverInterface, model: ModelInterface) {
    this.observer = observer;
    this.model = model;
  }

  public setValues(values: any[]) {
    this.model.setValues(values);

    this.observer.notify("model:values", values);
  }

  public getPositions(): number[] {
    return this.model.getPositions();
  }

  public setValuesByPositions(positions: number[]): void {
    this.model.setValuesByPositions(positions);

    this.observer.notify("model:values", this.model.getValues());
  }
}
