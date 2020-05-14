import { SliderController } from "./SliderController";

export class Slider {
  controller: SliderController;

  constructor(state) {
    this.controller = new SliderController(state);
  }
  render() {
    return this.controller.render();
  }
  slideTo(position: number) {
    this.controller.slideTo(position);
  }
}
