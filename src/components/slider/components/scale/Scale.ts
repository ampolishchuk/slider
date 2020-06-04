import ScaleControllerInterface from "./interfaces/ScaleController.interface";

import ScaleView from "../../view/Scale.view";
import ScaleController from "../../presenter/Scale.presenter";
import ScaleObserverInterface from "./interfaces/ScaleObserver.interface";

interface DependenciesInterface {
  observer: ScaleObserverInterface;
}

export default class Scale {
  private $: DependenciesInterface;
  private controller: ScaleControllerInterface;

  constructor(dependencies: DependenciesInterface) {
    this.$ = dependencies;
    const view = new ScaleView({ observer: this.$.observer });
    this.controller = new ScaleController({ view });
  }

  public render(): HTMLElement {
    return this.controller.render();
  }
}
