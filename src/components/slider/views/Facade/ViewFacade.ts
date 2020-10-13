import ViewInterface from "../Interfaces/View.interface";
import ViewFacadeInterface from "../Interfaces/ViewFacade.interface";
import ClickableViewInterface from "../Interfaces/ClickableView.interface";
import DraggableCompositeViewInterface from "../Interfaces/DraggableCompositeView.interface";
import EventManager from "../../eventManager/EventManager";

export default class ViewFacade
  extends EventManager
  implements ViewFacadeInterface {
  private slider: ViewInterface;
  private line: ClickableViewInterface;
  private buttons: DraggableCompositeViewInterface;
  private scale: ClickableViewInterface;

  constructor(
    slider: ViewInterface,
    line: ClickableViewInterface,
    buttons: DraggableCompositeViewInterface,
    scale: ClickableViewInterface
  ) {
    super();

    this.slider = slider;
    this.line = line;
    this.buttons = buttons;
    this.scale = scale;

    this.addListeners();
  }

  public render(): HTMLElement {
    const element = this.slider.render();
    const lineRender = this.line.render();
    const buttons = this.buttons.render();

    buttons.forEach((button) => {
      lineRender.appendChild(button);
    });

    element.appendChild(lineRender);
    element.appendChild(this.scale.render());

    return element;
  }

  public setPositions(positions: number[]) {
    this.buttons.setPositions(positions);
  }

  public showScale() {
    this.scale.show();
  }

  public hideScale() {
    this.scale.hide();
  }

  public onAction(callback: Function) {
    this.subscribe("onAction", callback);
  }

  private addListeners() {
    this.buttons.onDragging((positions: number[]) => {
      this.notify("onAction", positions);
    });

    this.line.onClick((position: number) => {
      this.updatePositionAndNotify(position);
    });

    this.scale.onClick((position: number) => {
      this.updatePositionAndNotify(position);
    });
  }

  private updatePositionAndNotify(position: number) {
    const positions = this.buttons.getPositions();
    const index = this.getIndexOfNearest(positions, position);

    positions[index] = position;

    this.notify("onAction", positions);
  }

  private getIndexOfNearest(array: number[], value: number): number {
    let minRange: number;

    return array.reduce((indexOfNearest, val, index) => {
      const range = Math.abs(val - value);

      if (!minRange || minRange > range) {
        minRange = range;
        return index;
      }

      return indexOfNearest;
    }, 0);
  }
}
