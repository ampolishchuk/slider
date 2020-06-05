import View from "../services/View";

export default class LineView extends View {
  render(): HTMLElement {
    this.element = document.createElement("div");
    this.element.classList.add("slider-line");

    return this.element;
  }
}
