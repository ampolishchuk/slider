import { View } from "../../services/js/View";

export class SliderView extends View {
  private button: any;

  constructor() {
    require("./slider.sass");

    super({
      template: require("./slider.pug"),
    });
  }
  private appendButton(): void {
    this.button = document.createElement("button");
    this.button.classList.add("slider-button");

    this.node.appendChild(this.button);
  }
  public createNode(state?: object): void {
    super.createNode(state);

    this.appendButton();
  }
  public changeButtonPosition(position: number): void {
    this.button.style.left = position + "px";
  }
}
