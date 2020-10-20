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

  public setPositionLeft(position: number): void {
    this.element.style.left = position - this.elementCenter() + "%";
  }

  public setPositionRight(position: number): void {
    this.element.style.right = position - this.elementCenter() + "%";
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

  private elementCenter(): number {
    const parentWidth = this.element.parentElement.offsetWidth;
    const relativeWidth = this.element.offsetWidth / (parentWidth / 100);

    return relativeWidth / 2;
  }

  protected getPositionByClientX(clientX: number): number {
    const parent = this.element.parentElement;
    const parentCoords = parent.getBoundingClientRect();
    const parentWidth = parent.offsetWidth;

    return ((clientX - parentCoords.left) / parentWidth) * 100;
  }
}
