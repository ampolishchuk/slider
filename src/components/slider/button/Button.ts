import { SliderModelInterface } from "../Slider.interfaces";
import {
  ButtonControllerInterface,
  ButtonObserverInterface,
} from "./Button.interfaces";

import ButtonView from "./Button.view";
import ButtonController from "./Button.controller";
import Observer from "../services/Observer";

interface DependenciesInterface {
  observer: ButtonObserverInterface;
  model: SliderModelInterface;
}

export default class Button {
  private $: DependenciesInterface;
  private controller: ButtonControllerInterface;

  constructor(dependencies: DependenciesInterface) {
    const observer = new Observer();
    const view = new ButtonView();

    this.$ = dependencies;

    this.controller = new ButtonController({
      observer,
      model: this.$.model,
      view,
    });
  }

  public render() {
    return this.controller.render();
  }

  public setPosition(position: number) {
    this.controller.setPosition(position);
  }
}
