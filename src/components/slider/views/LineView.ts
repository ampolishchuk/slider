import AbstractView from "./AbstractView";

export default class LineView extends AbstractView {
  constructor() {
    super();
    this.element = document.createElement("div");
    this.element.classList.add("slider-line");
  }
}
