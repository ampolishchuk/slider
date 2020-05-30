import ButtonModelInterface from "../interfaces/ButtonModel.interface";
import ButtonViewInterface from "../interfaces/ButtonView.interface";

import container from "../../../services/IOCContainer";

export default class ButtonController {
  private model: ButtonModelInterface;
  private view: ButtonViewInterface;

  constructor() {
    this.model = container.get("SliderModel");
    this.view = container.get("ButtonView");
  }

  render(): HTMLElement {
    return this.view.render();
  }
}
