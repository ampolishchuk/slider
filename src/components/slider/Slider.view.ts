interface StateInterface {
  className?: string;
  position?: number;
}

export default class SliderView {
  public node: HTMLElement;
  public button: HTMLElement;
  private onMouseMoveList: Array<Function> = [];

  constructor() {
    require("./Slider.sass");
  }

  public createNode(state: StateInterface = {}): HTMLElement {
    if (this.node && this.button) this.destroy();

    this.node = document.createElement("section");
    this.node.classList.add("slider");
    this.button = document.createElement("button");
    this.button.classList.add("slider-button");
    this.node.appendChild(this.button);

    state.className && this.node.classList.add(state.className);
    this.changeButtonPosition(state.position);

    this.addHandlers();

    return this.node;
  }
  public changeButtonPosition = (position: number): void => {
    this.button.style.left = position + "px";
  };
  public onMouseMove(callback: Function): void {
    this.onMouseMoveList.push(callback);
  }
  public destroy() {
    this.node.remove();
    this.button.remove();
  }

  private addHandlers(): void {
    this.button.addEventListener("mousedown", (event: MouseEvent) => {
      document.addEventListener("mousemove", this.mouseMoveEvent);
    });

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", this.mouseMoveEvent);
    });
  }
  private mouseMoveEvent = (event: MouseEvent): void => {
    this.onMouseMoveList.forEach((callback: Function) => callback(event.pageX));
  };
}
