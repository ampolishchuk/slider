import ViewInterface from "./interfaces/View.interface";
import EventManager from "../eventManager/EventManager";

export default class View extends EventManager implements ViewInterface {
  protected element: HTMLElement;

  constructor(tag: string, className: string) {
    super();

    const element = document.createElement(tag);
    element.classList.add(className);

    this.element = element;
  }

  public render(): HTMLElement {
    return this.element;
  }

  public setPositionLeft(position: string): void {
    this.element.style.left = position;
  }

  public setPositionRight(position: string): void {
    this.element.style.right = position;
  }

  public show() {
    if (this.element.classList.contains("hidden")) {
      this.element.classList.remove("hidden");
    }
  }

  public hide() {
    if (!this.element.classList.contains("hidden")) {
      this.element.classList.add("hidden");
    }
  }

  protected getPositionByClientX(clientX: number): number {
    const parent = this.element.parentElement;
    const parentCoords = parent.getBoundingClientRect();
    const parentWidth = parent.offsetWidth;

    return ((clientX - parentCoords.left) / parentWidth) * 100;
  }
}
