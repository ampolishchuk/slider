import SliderModel from "./Slider.model";
import SliderView from "./Slider.view";

export default class Slider {
  private model: SliderModel;
  private view: SliderView;
  private onMouseMoveList: Array<Function> = [];
  public node: HTMLElement;

  constructor(state?: object) {
    this.model = new SliderModel(state);
    this.view = new SliderView();

    this.addObservers();
  }

  public onMouseMove(callback: Function): void {
    this.onMouseMoveList.push(callback);
  }

  public slideTo(position: number): void {
    this.model.setPosition(position);
  }

  public render(state?: object): HTMLElement {
    this.model.setState(state);

    const { position, className } = this.model.getState();

    return this.view.createNode({ position, className });
  }

  private addObservers() {
    this.model.addObserver(({ position }: { position: number }) => {
      this.view.changeButtonPosition(position);
      this.updateObservers();
    });

    this.view.onMouseMove((position: number) => {
      this.model.setPosition(position);
    });
  }
  private updateObservers() {
    const { position } = this.model.getState();

    this.onMouseMoveList.forEach((callback: Function) => callback(position));
  }
}
