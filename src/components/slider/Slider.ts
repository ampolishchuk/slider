import { SliderControllerIntarface } from "./Slider.interfaces";

import Observer from "./services/Observer";
import SliderModel from "./Slider.model";
import SliderView from "./Slider.view";
import SliderController from "./Slider.controller";
import Scale from "./scale/Scale";
import Button from "./button/Button";

export default class Slider {
  private controller: SliderControllerIntarface;

  constructor(state?: object) {
    const observer = new Observer();
    const model = new SliderModel({ observer }, state);
    const view = new SliderView();
    const scale = new Scale({ model });
    const button = new Button({ model });

    this.controller = new SliderController({
      observer,
      model,
      view,
      scale,
      button,
    });
  }

  public render() {
    return this.controller.render();
  }

  public slideTo(position: number) {
    this.controller.setPosition(position);
  }

  public addClass(className: string) {
    this.controller.addClass(className);
  }
}
