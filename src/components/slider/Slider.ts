import SliderController from "./SliderController";

export default class Slider {
  private controller: SliderController;

  constructor(state?: object) {
    this.controller = new SliderController(state);
  }
  public render(): HTMLElement {
    return this.controller.render();
  }
  public slideTo(position: number): void {
    this.controller.slideTo(position);
  }
}
