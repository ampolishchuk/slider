import View from "../../services/js/View";

export default class SliderView extends View {
  public button: HTMLElement;

  constructor() {
    require("./slider.sass");

    const template: Function = require("./slider.pug");

    super(template);
  }
  public createNode(state?: object): void {
    this.node = document.createElement("section");
    this.node.classList.add("slider");

    this.button = document.createElement("button");
    this.button.classList.add("slider-button");

    this.node.appendChild(this.button);
  }
  public changeButtonPosition(position: number): void {
    this.button.style.left = position + "px";
  }
}
