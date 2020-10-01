import AbstractMovableView from "./AbstractMovableView";

export default class ButtonView extends AbstractMovableView {
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

    this.onMouseMove();
  };

  private mouseUpEvent = () => {
    document.removeEventListener("mousemove", this.mouseMoveEvent);
    document.removeEventListener("mouseup", this.mouseUpEvent);
  };

  private onMouseMove() {
    this.listeners.forEach((listener) => {
      if (listener.type === "mouseMove") listener.callback(this.getPosition());
    });
  }
}
