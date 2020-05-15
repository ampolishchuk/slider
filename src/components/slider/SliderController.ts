import SliderModel from "./SliderModel";
import SliderView from "./SliderView";

export default class SliderController {
  private model: SliderModel;
  private view: SliderView;

  constructor(state?: object) {
    this.model = new SliderModel(state);
    this.view = new SliderView();
  }
  public render(): HTMLElement {
    this.view.createNode(this.model.getState());

    this.addHandlers();

    return this.view.node;
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
