import { SliderModelInterface } from "../Slider.interfaces";
import { ButtonControllerInterface } from "./Button.interfaces";

import ButtonView from "./Button.view";
import ButtonController from "./Button.controller";

interface DependenciesInterface {
  model: SliderModelInterface;
}

export default class Button {
  private $: DependenciesInterface;
  private controller: ButtonControllerInterface;

  constructor(dependencies: DependenciesInterface) {
    const view = new ButtonView();

    this.$ = dependencies;

    this.controller = new ButtonController({
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
