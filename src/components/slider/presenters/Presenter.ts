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

    this.observer.subscribe("model:values", () => {
      const positions = this.modelFacade.getPositions();

      this.viewFacade.setPositions(positions);
    });

    this.observer.subscribe("view:positions", (positions: number[]) => {
      this.modelFacade.setValuesByPositions(positions);
    });
  }

  public render() {
    this.viewFacade.render();
  }

  public setValues(values: any[]) {
    this.modelFacade.setValues(values);
  }

  public onChange(callback: Function) {
    this.observer.subscribe("model:values", callback);
  }

  public showScale() {
    this.viewFacade.showScale();
  }

  public hideScale() {
    this.viewFacade.hideScale();
  }
}
