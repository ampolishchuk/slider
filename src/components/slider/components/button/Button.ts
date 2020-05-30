import ButtonControllerInterface from "./interfaces/ButtonController.interface";

import container from "../../services/IOCContainer";
import ButtonController from "./controller/Button.controller";
import ButtonView from "./view/Button.view";

container.set("ButtonView", ButtonView);
container.set("ButtonController", ButtonController);

export default class Button {
  private controller: ButtonControllerInterface;

  constructor() {
    this.controller = container.get("ButtonController");
  }

  public render(): HTMLElement {
    return this.controller.render();
  }

  public setPosition(position: number) {
    this.controller.setPosition(position);
  }
}
