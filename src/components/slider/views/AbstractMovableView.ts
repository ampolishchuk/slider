import AbstractView from "./AbstractView";
import MovableViewInterface from "../interfaces/MovableView.interface";

export default abstract class AbstractMovableView
  extends AbstractView
  implements MovableViewInterface {
  private listeners: { type: string; callback: Function }[] = [];
  private position: number = 0;

  public render(): HTMLElement {
    this.removeEvents();
    this.addEvents();

    return super.render();
  }

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

  public addEventListener(type: string, callback: Function): void {
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

  private addEvents() {
    this.element.addEventListener("click", this.mouseClickEvent);
    this.element.addEventListener("mousedown", this.mouseDownEvent);
  }

  private removeEvents() {
    this.element.removeEventListener("click", this.mouseClickEvent);
    this.element.removeEventListener("mousedown", this.mouseDownEvent);
  }

  private mouseClickEvent = (event: MouseEvent) => {
    event.preventDefault();

    document.removeEventListener("mousemove", this.mouseMoveEvent);
    document.removeEventListener("mouseup", this.mouseUpEvent);
  };

  private mouseDownEvent = (event: MouseEvent) => {
    event.preventDefault();

    document.addEventListener("mousemove", this.mouseMoveEvent);
    document.addEventListener("mouseup", this.mouseUpEvent);
  };

  private mouseMoveEvent = (event: MouseEvent) => {
    this.setPositionByClientX(event.clientX);

    this.onDragging();
  };

  private mouseUpEvent = () => {
    document.removeEventListener("mousemove", this.mouseMoveEvent);
    document.removeEventListener("mouseup", this.mouseUpEvent);
  };

  private onDragging() {
    this.listeners.forEach((listener) => {
      if (listener.type === "dragging") listener.callback(this.position);
    });
  }
}
