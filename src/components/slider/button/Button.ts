import {
  ButtonModelInterface,
  ButtonControllerInterface,
  ButtonObserverInterface,
} from "./Button.interfaces";

import ButtonView from "./Button.view";
import ButtonController from "./Button.controller";

interface DependenciesInterface {
  observer: ButtonObserverInterface;
  model: ButtonModelInterface;
}

export default class Button {
  private $: DependenciesInterface;
  private controller: ButtonControllerInterface;

  constructor(dependencies: DependenciesInterface) {
    const view = new ButtonView();

    this.$ = dependencies;

    this.controller = new ButtonController({
      observer: this.$.observer,
      model: this.$.model,
      view,
    });
  }

  public render() {
    return this.controller.render();
  }
}
