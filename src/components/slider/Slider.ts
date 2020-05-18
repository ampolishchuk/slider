import SliderModel from "./Slider.model";
import SliderView from "./Slider.view";

export default class Slider {
  private model: SliderModel;
  private view: SliderView;
  public node: HTMLElement;

  constructor(state?: object) {
    this.model = new SliderModel(state);
    this.view = new SliderView();
  }

  public addObserver(callback: Function): void {
    this.model.addObserver(callback);
  }
  public slideTo(position: number): void {
    this.model.setPosition(position);
    this.view.changeButtonPosition(this.model.getPosition());
  }
  public refresh(state?: object) {
    state && this.model.setState(state);

    return this.render();
  }
  public render(): HTMLElement {
    return this.view.createNode(this.model.getState());
  }
}
