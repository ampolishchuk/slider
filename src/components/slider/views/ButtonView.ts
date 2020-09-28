import AbstractMovalableView from "./AbstractMovalableView";

export default class ButtonView extends AbstractMovalableView {
  constructor() {
    super();
    this.element = document.createElement("button");
    this.element.classList.add("slider-button");

    this.addEvents();
  }

  private addEvents() {
    this.element.addEventListener("click", () => {
      document.removeEventListener("mousemove", this.mouseMoveEvent);
      document.removeEventListener("mouseup", this.mouseUpEvent);
    });

    this.element.addEventListener("mousedown", (event) => {
      event.preventDefault();

      document.addEventListener("mousemove", this.mouseMoveEvent);
      document.addEventListener("mouseup", this.mouseUpEvent);
    });
  }

  private mouseMoveEvent = (event: MouseEvent) => {
    this.setPositionByClientX(event.clientX);

    this.onMove();
  };

  private mouseUpEvent = (event: MouseEvent) => {
    document.removeEventListener("mousemove", this.mouseMoveEvent);
    document.removeEventListener("mouseup", this.mouseUpEvent);
  };

  private onMove() {
    this.listeners.forEach((listener) => {
      if (listener.type === "onMove") listener.callback();
    });
  }
}
