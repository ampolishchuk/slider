export default class SliderView {
  public node: HTMLElement;
  public button: HTMLElement;
  private onMouseMoveList: Array<Function> = [];

  constructor() {
    require("./Slider.sass");
  }

  public createNode(state?: object): HTMLElement {
    this.node = document.createElement("section");
    this.node.classList.add("slider");

    this.button = document.createElement("button");
    this.button.classList.add("slider-button");

    this.node.appendChild(this.button);

    this.addHandlers();

    return this.node;
  }
  public onMouseMove(callback: Function): void {
    this.onMouseMoveList.push(callback);
  }

  private addHandlers(): void {
    this.button.addEventListener("mousedown", (event: MouseEvent) => {
      document.addEventListener("mousemove", this.mouseMoveEvent);
    });

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", this.mouseMoveEvent);
    });
  }
  private mouseMoveEvent(event: MouseEvent): void {
    this.changeButtonPosition(event.pageX);

    this.onMouseMoveList.forEach((callback: Function) => callback(event.pageX));
  }
  private changeButtonPosition(position: number): void {
    this.button.style.left = position + "px";
  }
}
