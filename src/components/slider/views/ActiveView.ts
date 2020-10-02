import View from "./View";
import ActiveViewInterface from "../interfaces/ActiveView.interface";

export default class ActiveView extends View implements ActiveViewInterface {
  protected listeners: { type: string; callback: Function }[] = [];
  protected position: number = 0;

  public setPosition(position: number) {
    this.position = this.verifyPosition(position);
  }

  public getPosition(): number {
    return this.position;
  }

  public addEventListener(type: string, callback: Function): void {
    this.listeners.push({ type, callback });
  }

  protected setPositionByClientX(clientX: number): void {
    const parent = this.element.parentElement;
    const parentCoords = parent.getBoundingClientRect();
    const parentWidth = parent.offsetWidth;
    const position = ((clientX - parentCoords.left) / parentWidth) * 100;

    this.setPosition(position);
  }

  private verifyPosition(position: number): number {
    if (!position || position < 0) return 0;
    if (position > 100) return 100;

    return position;
  }
}
