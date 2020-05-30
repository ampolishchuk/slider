import ButtonInterface from "../interfaces/Button.interface";

import container from "../services/IOCContainer";
import Button from "../components/button/Button";
import Scale from "../components/scale/Scale";
import ScaleInterface from "../interfaces/Scale.interface";

container.set("Button", Button);
container.set("Scale", Scale);

export default class SliderController {
  private button: ButtonInterface;
  private scale: ScaleInterface;

  constructor() {
    this.button = container.get("Button");
    this.scale = container.get("Scale");
  }

  public render(): HTMLElement {
    const slider = container.get("SliderView");

    const sliderContainer = slider.render();

    sliderContainer.appendChild(this.button.render());
    sliderContainer.appendChild(this.scale.render());

    return sliderContainer;
  }

  public setPosition(position: number) {
    this.button.setPosition(position);
  }
}
