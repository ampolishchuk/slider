import AbstractMovableView from "./AbstractMovableView";

export default class ButtonView extends AbstractMovableView {
  constructor() {
    super();
    this.element = document.createElement("button");
    this.element.classList.add("slider-button");
  }
}
