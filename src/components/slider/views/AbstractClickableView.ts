import AbstractActiveView from "./AbstractActiveView";
import ClickableViewInterface from "../interfaces/ClickableView.interface";

export default abstract class AbstractClickableView
  extends AbstractActiveView
  implements ClickableViewInterface {
  protected listeners: { type: string; callback: Function }[] = [];
  protected position: number = 0;

  public render(): HTMLElement {
    this.removeClickEvents();
    this.addClickEvents();

    return super.render();
  }

  protected addClickEvents() {
    this.element.addEventListener("click", this.mouseClickEvent);
  }

  protected removeClickEvents() {
    this.element.removeEventListener("click", this.mouseClickEvent);
  }

  private mouseClickEvent = (event: MouseEvent) => {
    event.preventDefault();

    this.setPositionByClientX(event.clientX);

    this.onClickEvent();
  };

  private onClickEvent() {
    this.listeners.forEach((listener) => {
      if (listener.type === "click") listener.callback(this.position);
    });
  }
}
