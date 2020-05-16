import SliderModel from "./Slider.model";
import SliderModelInterface from "./Slider.model.interface";
import SliderView from "./Slider.view";

export default class SliderController {
  private model: SliderModel;
  private view: SliderView;

  constructor(state?: object) {
    this.model = new SliderModel(state);
    this.view = new SliderView();
  }
  public getNode(): HTMLElement {
    this.view.createNode(this.model.getState());

    this.addHandlers();

    return this.view.node;
  }
  public getState(): SliderModelInterface {
    return this.model.getState();
  }
  public slideTo(position: number): void {
    this.model.setPosition(position);
    this.view.changeButtonPosition(this.model.getPosition());
  }
  private addHandlers(): void {
    this.view.button.addEventListener("mousedown", (event: MouseEvent) => {
      this.model.setClickPosition(event);

      document.addEventListener("mousemove", this.mouseMoveHandler);
    });
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", this.mouseMoveHandler);
    });
  }
  private mouseMoveHandler = (event: MouseEvent): void => {
    const position = this.model.getDragPosition(event);

    this.slideTo(position);
  };
}
