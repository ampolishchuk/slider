import View from "../services/View";

export default class ButtonView extends View {
  render(): HTMLElement {
    this.element = document.createElement("button");
    this.element.classList.add("slider-button");

    return this.element;
  }
}
