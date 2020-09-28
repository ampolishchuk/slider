import AbstractView from "./AbstractView";

export default class SliderView extends AbstractView {
  constructor() {
    super();
    this.element = document.createElement("section");
    this.element.classList.add("slider");
  }
}
