import MovableViewInterface from "./interfaces/MovableView.interface";
import View from "./View";

export default class MovableView extends View implements MovableViewInterface {
  public getPosition(): number {
    return parseFloat(this.element.style.left) + this.elementCenter();
  }

  public setPosition(position: number = 0): void {
    this.element.style.left = position - this.elementCenter() + "%";
  }

  private elementCenter(): number {
    const parentWidth = this.element.parentElement.offsetWidth;
    const relativeWidth = this.element.offsetWidth / (parentWidth / 100);

    return relativeWidth / 2;
  }
}
