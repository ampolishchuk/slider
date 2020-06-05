import View from "../services/View";

export default class SliderView extends View {
  render(): HTMLElement {
    this.element = document.createElement("section");
    this.element.classList.add("slider");

    return this.element;
  }
}
