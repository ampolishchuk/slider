import ObserverInterface from "../interfaces/Observer.interface";
import ModelFacadeInterface from "../interfaces/ModelFacade.interface";
import ViewFacadeInterface from "../interfaces/ViewFacade.interface";
import PresenterInterface from "../interfaces/Presenter.interface";

interface DependenciesInterface {
  observer: ObserverInterface;
  modelFacade: ModelFacadeInterface;
  viewFacade: ViewFacadeInterface;
}

export default class Presenter implements PresenterInterface {
  private observer: ObserverInterface;
  private modelFacade: ModelFacadeInterface;
  private viewFacade: ViewFacadeInterface;

  constructor(dependencies: DependenciesInterface) {
    const { observer, modelFacade, viewFacade } = dependencies;

    this.observer = observer;
    this.modelFacade = modelFacade;
    this.viewFacade = viewFacade;

    this.modelFacade.onPositionsChange((positions: number[]) => {
      this.viewFacade.setPositions(positions);
    });

    this.observer.subscribe("view:positions", (positions: number[]) => {
      this.modelFacade.setPositions(positions);
    });
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
}
