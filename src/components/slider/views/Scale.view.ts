import View from "../services/View";

export default class ScaleView extends View {
  render(): HTMLElement {
    this.element = document.createElement("div");
    this.element.classList.add("slider-scale");

    return this.element;
  }
}
