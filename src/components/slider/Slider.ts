import Observer from "./observer/Observer";
import Model from "./models/Model";
import ModelFacade from "./models/Facade/ModelFacade";
import ViewFactory from "./views/Factory/ViewFactory";
import ViewFacade from "./views/Facade/ViewFacade";
import Presenter from "./presenters/Presenter";

import ObserverInterface from "./interfaces/Observer.interface";
import ModelFacadeInterface from "./interfaces/ModelFacade.interface";
import ViewFacadeInterface from "./interfaces/ViewFacade.interface";
import PresenterInterface from "./interfaces/Presenter.interface";

require("./css/Slider.sass");

interface OptionsInterface {
  scale?: boolean;
  range?: boolean;
  points?: number[];
  values?: any;
}

export default class Slider {
  private presenter: PresenterInterface;

  constructor(container: Element, options: OptionsInterface = {}) {
    const { scale, range, points, values = [] } = options;
    const observer = new Observer();
    const modelFacade = this.createModelFacade(observer, points);
    const viewFacade = this.createViewFacade(observer, container, range);

    this.presenter = new Presenter({
      observer,
      modelFacade,
      viewFacade,
    });

    this.render();

    this.setValues(values);

    scale ? this.showScale() : this.hideScale();
  }

  public render() {
    this.presenter.render();
  }

  public setValues(values: any[]) {
    values = this.isValideValues(values) ? values : [];

    this.presenter.setValues(values);
  }

  public onChange(callback: Function) {
    this.presenter.onChange(callback);
  }

  public showScale() {
    this.presenter.showScale();
  }

  public hideScale() {
    this.presenter.hideScale();
  }

  private createModelFacade(
    observer: ObserverInterface,
    points: Array<number>
  ): ModelFacadeInterface {
    const model = new Model(points);

    return new ModelFacade(observer, model);
  }

  private createViewFacade(
    observer: ObserverInterface,
    container: Element,
    range: boolean
  ): ViewFacadeInterface {
    const viewFactory = new ViewFactory();
    const slider = viewFactory.createSlider();
    const line = viewFactory.createLine();
    const buttons = [];
    const buttonsAmount = range ? 2 : 1;
    const scale = viewFactory.createScale();

    for (let i = 0; i < buttonsAmount; i++) {
      buttons.push(viewFactory.createButton());
    }

    return new ViewFacade(observer, container, slider, line, buttons, scale);
  }

  private isValideValues(values: any[]): boolean {
    if (!values || !Array.isArray(values)) {
      console.error(
        `The values to be set must be an array. Recieved: ${values} (${typeof values});`
      );

      return false;
    }

    return true;
  }
}
