export default class View {
  private element: HTMLElement;

  constructor(tag: string, className: string) {
    this.element = document.createElement(tag);
    this.element.classList.add(className);
  }

  public render(): HTMLElement {
    return this.element;
  }

  public addClass(className: string) {
    this.element.classList.add(className);
  }
}
