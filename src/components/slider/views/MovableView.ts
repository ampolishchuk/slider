import MovableViewInterface from "./Interfaces/MovableView.interface";
import View from "./View";

export default class MovableView extends View implements MovableViewInterface {
  private position: number = 0;

  public setPosition(position: number): void {
    this.position = position ?? this.position;

    this.updateStyles();
  }

  public getPosition(): number {
    return this.position;
  }

  private updateStyles() {
    this.element.style.left = this.position - this.elementCenter() + "%";
  }

  private elementCenter(): number {
    const parentWidth = this.element.parentElement.offsetWidth;
    const relativeWidth = this.element.offsetWidth / (parentWidth / 100);

    return relativeWidth / 2;
  }
}
