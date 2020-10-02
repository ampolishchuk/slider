import AbstractActiveView from "./AbstractActiveView";
import DraggableViewInterface from "../interfaces/DraggableView.interface";

export default abstract class AbstractDraggableView
  extends AbstractActiveView
  implements DraggableViewInterface {
  render(): HTMLElement {
    this.removeDraggingEvents();
    this.addDraggingEvents();

    return super.render();
  }

  public setPosition(position: number) {
    super.setPosition(position);

    this.updateView();
  }

  private updateView() {
    this.element.style.left = this.centerPositionOnMouse(this.position) + "%";
  }

  private centerPositionOnMouse(position: number): number {
    const parentWidth = this.element.parentElement.offsetWidth;
    const relativeWidth = this.element.offsetWidth / (parentWidth / 100);

    return position - relativeWidth / 2;
  }

  private addDraggingEvents() {
    this.element.addEventListener("click", this.mouseClickEvent); // Fixing single click event
    this.element.addEventListener("mousedown", this.draggingEvent);
  }

  private removeDraggingEvents() {
    this.element.removeEventListener("click", this.mouseClickEvent);
    this.element.removeEventListener("mousedown", this.draggingEvent);
  }

  private mouseClickEvent = (event: MouseEvent) => {
    // When a single mouse click happens it's removed events for dragging
    event.preventDefault();

    document.removeEventListener("mousemove", this.mouseMoveEvent);
    document.removeEventListener("mouseup", this.mouseUpEvent);
  };

  private draggingEvent = (event: MouseEvent) => {
    event.preventDefault();

    document.addEventListener("mousemove", this.mouseMoveEvent);
    document.addEventListener("mouseup", this.mouseUpEvent);
  };

  private mouseMoveEvent = (event: MouseEvent) => {
    this.setPositionByClientX(event.clientX);

    this.onDraggingEvent();
  };

  private mouseUpEvent = () => {
    document.removeEventListener("mousemove", this.mouseMoveEvent);
    document.removeEventListener("mouseup", this.mouseUpEvent);
  };

  private onDraggingEvent() {
    this.listeners.forEach((listener) => {
      if (listener.type === "dragging") listener.callback(this.position);
    });
  }
}
