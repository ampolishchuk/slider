import ModelFacadeInterface from "../models/facade/interface/ModelFacade.interface";
import ViewFacadeInterface from "../views/facade/interface/ViewFacade.interface";
import PresenterInterface from "./interface/Presenter.interface";

export default class Presenter implements PresenterInterface {
  private modelFacade: ModelFacadeInterface;
  private viewFacade: ViewFacadeInterface;

  constructor(
    modelFacade: ModelFacadeInterface,
    viewFacade: ViewFacadeInterface
  ) {
    this.modelFacade = modelFacade;
    this.viewFacade = viewFacade;

    this.addListeners();
  }

  public render(): HTMLElement {
    return this.viewFacade.render();
  }

  public setValues(values: any[]) {
    this.modelFacade.setValues(values);
  }

  public onChange(callback: Function) {
    this.modelFacade.onValuesChange(callback);
  }

  public showScale() {
    this.viewFacade.showScale();
  }

  public hideScale() {
    this.viewFacade.hideScale();
  }

  private addListeners() {
    this.modelFacade.onPositionsChange((positions: number[]) => {
      this.viewFacade.setPositions(positions);
    });

    this.viewFacade.onAction((positions: number[]) => {
      this.modelFacade.setPositions(positions);
    });
  }
}
