import ViewInterface from "../interfaces/View.interface";

export default abstract class AbstractView implements ViewInterface {
  protected element: HTMLElement;

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
}
