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

    this.node = this.render();
  }

  public render(): HTMLElement {
    this.view.createNode(this.model.getState());

    this.addViewHandlers();

    return this.view.node;
  }
  private addViewHandlers(): void {
    this.view.button.addEventListener("mousedown", (event: MouseEvent) => {
      document.addEventListener("mousemove", this.onMouseMove);
    });

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", this.onMouseMove);
    });
  }
  private onMouseMove = (event: MouseEvent): void => {
    console.log(event);
    this.slideTo(event.pageX);
  };
}
