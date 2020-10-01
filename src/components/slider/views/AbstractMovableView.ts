import AbstractView from "./AbstractView";
import MovableViewInterface from "../interfaces/MovableView.interface";

export default abstract class AbstractMovableView
  extends AbstractView
  implements MovableViewInterface {
  private position: number = 0;
  protected listeners: { type: string; callback: Function }[] = [];

  public setPosition(position: number) {
    this.position = this.verifyPosition(position);

    this.updateView();
  }

  public setPositionByClientX(clientX: number): void {
    const parent = this.element.parentElement;
    const parentCoords = parent.getBoundingClientRect();
    const parentWidth = parent.offsetWidth;
    const position = ((clientX - parentCoords.left) / parentWidth) * 100;

    this.setPosition(position);
  }

  public getPosition(): number {
    return this.position;
  }

  public addListener(type: string, callback: Function): void {
    this.listeners.push({ type, callback });
  }

  private updateView() {
    this.element.style.left = this.centerPositionOnMouse(this.position) + "%";
  }

  private verifyPosition(position: number): number {
    if (!position || position < 0) return 0;
    if (position > 100) return 100;

    return position;
  }

  private centerPositionOnMouse(position: number): number {
    const parentWidth = this.element.parentElement.offsetWidth;
    const relativeWidth = this.element.offsetWidth / (parentWidth / 100);

    return position - relativeWidth / 2;
  }
}
