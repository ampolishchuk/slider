import ViewInterface from "../interfaces/View.interface";

export default class View implements ViewInterface {
  private readonly tag: string;
  private readonly className: string;
  protected element: HTMLElement;

  constructor(tag: string, className: string) {
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

  private createElement(): HTMLElement {
    const element = document.createElement(this.tag);
    element.classList.add(this.className);

    return element;
  }
}
