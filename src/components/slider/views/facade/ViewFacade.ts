import ViewInterface from "../interfaces/View.interface";
import ViewFacadeInterface from "./interface/ViewFacade.interface";
import ClickableViewInterface from "../interfaces/ClickableView.interface";
import DraggableCompositeViewInterface from "../composites/interfaces/DraggableCompositeView.interface";
import RangeViewInterface from "../interfaces/RangeView.interface";
import MovableCompositeViewInterface from "../composites/interfaces/MovableCompositeView.interface";

export default class ViewFacade implements ViewFacadeInterface {
  private slider: ViewInterface;
  private labels: MovableCompositeViewInterface;
  private line: ClickableViewInterface;
  private rangeLine: RangeViewInterface;
  private buttons: DraggableCompositeViewInterface;
  private scale: ClickableViewInterface;

  constructor(
    slider: ViewInterface,
    labels: MovableCompositeViewInterface,
    line: ClickableViewInterface,
    rangeLine: RangeViewInterface,
    buttons: DraggableCompositeViewInterface,
    scale: ClickableViewInterface
  ) {
    this.slider = slider;
    this.labels = labels;
    this.line = line;
    this.rangeLine = rangeLine;
    this.buttons = buttons;
    this.scale = scale;
  }

  public render(): HTMLElement {
    const element = this.slider.render();
    const labels = this.labels.render();
    const line = this.line.render();
    const rangeLine = this.rangeLine.render();
    const buttons = this.buttons.render();

    line.appendChild(rangeLine);

    buttons.forEach((button) => {
      line.appendChild(button);
    });

    labels.forEach((label) => {
      element.appendChild(label);
    });
    element.appendChild(line);
    element.appendChild(this.scale.render());

    return element;
  }

  public setPositions(positions: number[]) {
    this.labels.setPositions(positions);
    this.buttons.setPositions(positions);
    this.rangeLine.setRange(positions);
  }

  public showScale() {
    this.scale.show();
  }

  public hideScale() {
    this.scale.hide();
  }

  public onAction(callback: Function) {
    this.onDragging(callback);
    this.onClick(callback);
  }

  private onDragging(callback: Function) {
    this.buttons.onDragging((positions: number[]) => {
      callback(positions);
    });
  }

  private onClick(callback: Function) {
    [this.line, this.rangeLine, this.scale].forEach((clickableView) => {
      clickableView.onClick((position: number) => {
        const positions = this.buttons.getPositions();
        const index = this.getIndexOfNearest(positions, position);

        positions[index] = position;

        callback(positions);
      });
    });
  }

  private getIndexOfNearest(array: number[], value: number): number {
    let minRange: number;

    return array.reduce((indexOfNearest, val, index) => {
      const range = Math.abs(val - value);

      if (!minRange || minRange >= range) {
        minRange = range;
        return index;
      }

      return indexOfNearest;
    }, 0);
  }
}
