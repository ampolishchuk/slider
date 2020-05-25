export default class SliderView {
  private element: HTMLElement;

  constructor() {
    require("./css/Slider.sass");

    this.element = document.createElement("section");
    this.element.classList.add("slider");
  }

  public render() {
    return this.element;
  }

  public addClass(className: string) {
    this.element.classList.add(className);
  }
}
