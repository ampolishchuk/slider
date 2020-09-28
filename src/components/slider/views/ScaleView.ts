import AbstractView from "./AbstractView";

export default class ScaleView extends AbstractView {
  constructor() {
    super();
    this.element = document.createElement("div");
    this.element.classList.add("slider-scale");
  }
}
