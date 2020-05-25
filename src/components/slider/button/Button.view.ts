export default class ButtonView {
  private element: HTMLElement;

  constructor() {
    this.element = document.createElement("button");
    this.element.classList.add("slider-button");
  }

  public render(position: number): HTMLElement {
    if (position) this.element.style.left = position + "px";

    return this.element;
  }

  public setPosition(position: number) {
    this.element.style.left = position + "px";
  }
}
