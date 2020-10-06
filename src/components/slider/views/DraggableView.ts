import MovableView from "./MovableView";
import DraggableViewInterface from "./Interfaces/DraggableView.interface";

export default class DraggableView
  extends MovableView
  implements DraggableViewInterface {
  render(): HTMLElement {
    this.removeDraggingEvents();
    this.addDraggingEvents();

    return super.render();
  }

  private addDraggingEvents() {
    this.element.addEventListener("click", this.mouseClickEvent);
    this.element.addEventListener("mousedown", this.draggingEvent);
  }

  private removeDraggingEvents() {
    this.element.removeEventListener("click", this.mouseClickEvent);
    this.element.removeEventListener("mousedown", this.draggingEvent);
  }

  private mouseClickEvent = (event: MouseEvent) => {
    event.preventDefault();
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
