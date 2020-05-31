import SliderControllerInterface from "./interfaces/SliderController.interface";

import Observer from "./services/Observer";
import SliderModel from "./model/Slider.model";
import SliderView from "./view/Slider.view";
import SliderController from "./controller/Slider.controller";
import Button from "./components/button/Button";
import Scale from "./components/scale/Scale";
import Line from "./components/line/Line";

export default class Slider {
  private controller: SliderControllerInterface;

  constructor(state?: object) {
    const observer = new Observer();
    const model = new SliderModel({ observer }, state);
    const view = new SliderView();
    const button = new Button({ observer });
    const line = new Line({ observer });
    const scale = new Scale({ observer });

    this.controller = new SliderController({
      observer,
      model,
      view,
      button,
      line,
      scale,
    });
  }

  public render(): HTMLElement {
    return this.controller.render();
  }

  public slideTo(position: number) {
    this.controller.setPosition(position);
  }
}
