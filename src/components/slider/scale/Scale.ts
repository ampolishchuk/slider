import {
  ScaleModelInterface,
  ScaleControllerInterface,
} from "./Scale.interfaces";

import ScaleView from "./Scale.view";
import ScaleController from "./Scale.controller";

interface DependenciesInterface {
  model: ScaleModelInterface;
}

export default class Scale {
  private $: DependenciesInterface;
  private controller: ScaleControllerInterface;

  constructor(dependencies: DependenciesInterface) {
    const view = new ScaleView();

    this.$ = dependencies;

    this.controller = new ScaleController({
      model: this.$.model,
      view,
    });
  }

  public render() {
    return this.controller.render();
  }
}
