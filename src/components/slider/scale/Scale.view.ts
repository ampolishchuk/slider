export default class ScaleView {
  private element: HTMLElement;

  constructor() {
    this.element = document.createElement("div");
    this.element.classList.add("slider-scale");
  }

  public render(): HTMLElement {
    return this.element;
  }
}
