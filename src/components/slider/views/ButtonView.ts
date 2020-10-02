import AbstractDraggableView from "./AbstractDraggableView";

export default class ButtonView extends AbstractDraggableView {
  constructor() {
    super();
    this.element = document.createElement("button");
    this.element.classList.add("slider-button");
  }
}
