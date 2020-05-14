import { SliderController } from "./SliderController";

export class Slider {
  private controller: SliderController;

  constructor(state?: object) {
    this.controller = new SliderController(state);
  }
  public render(): any {
    return this.controller.render();
  }
  public slideTo(position: number): void {
    this.controller.slideTo(position);
  }
}
