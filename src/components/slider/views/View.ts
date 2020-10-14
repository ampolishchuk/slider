import ViewInterface from "./interfaces/View.interface";
import EventManager from "../eventManager/EventManager";

export default class View extends EventManager implements ViewInterface {
  private readonly tag: string;
  private readonly className: string;
  protected element: HTMLElement;

  constructor(tag: string, className: string) {
    super();

    this.tag = tag;
    this.className = className;
    this.element = this.createElement();
  }

  public render(): HTMLElement {
    return this.element;
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

  private createElement(): HTMLElement {
    const element = document.createElement(this.tag);
    element.classList.add(this.className);

    return element;
  }
}
