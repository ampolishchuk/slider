import ButtonModelInterface from "./interfaces/ButtonModel.interface";
import ButtonControllerInterface from "./interfaces/ButtonController.interface";

import ButtonView from "../../views/Button.view";
import ButtonController from "../../presenters/Button.presenter";
import ButtonObserverInterface from "./interfaces/ButtonObserver.interface";

interface DependenciesInterface {
  observer: ButtonObserverInterface;
}

export default class Button {
  private $: DependenciesInterface;
  private controller: ButtonControllerInterface;

  constructor(dependencies: DependenciesInterface) {
    this.$ = dependencies;

    const view = new ButtonView();

    this.controller = new ButtonController({ observer: this.$.observer, view });
  }

  public render(): HTMLElement {
    return this.controller.render();
  }

  public setPosition(position: number): void {
    this.controller.setPosition(position);
  }
}
