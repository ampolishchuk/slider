import ScaleControllerInterface from "./interfaces/ScaleController.interface";

import ScaleView from "./view/Scale.view";
import ScaleController from "./controller/Scale.controller";
import ScaleObserverInterface from "./interfaces/ScaleObserver.interface";

interface DependenciesInterface {
  observer: ScaleObserverInterface;
}

export default class Scale {
  private $: DependenciesInterface;
  private controller: ScaleControllerInterface;

  constructor(dependencies: DependenciesInterface) {
    this.$ = dependencies;
    const view = new ScaleView();
    this.controller = new ScaleController({ observer: this.$.observer, view });
  }

  public render(): HTMLElement {
    return this.controller.render();
  }
}
