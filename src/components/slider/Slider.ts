import SliderControllerInterface from "./interfaces/SliderController.interface";
import container from "./services/IOCContainer";
import SliderController from "./controller/Slider.controller";
import SliderModel from "./model/Slider.model";
import SliderView from "./view/Slider.view";

container.set("SliderModel", SliderModel);
container.set("SliderView", SliderView);
container.set("SliderController", SliderController);

export default class Slider {
  private controller: SliderControllerInterface;

  constructor(state?: object) {
    this.controller = container.get("SliderController");
  }

  public render(): HTMLElement {
    return this.controller.render();
  }

  public slideTo(position: number) {
    this.controller.slideTo(position);
  }
}
