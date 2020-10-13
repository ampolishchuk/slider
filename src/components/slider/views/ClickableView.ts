import ClickableViewInterface from "./Interfaces/ClickableView.interface";
import View from "./View";

export default class ClickableView
  extends View
  implements ClickableViewInterface {
  public render(): HTMLElement {
    this.removeClickEvents();
    this.addClickEvents();

    return super.render();
  }

  public onClick(callback: Function) {
    this.subscribe("onClick", callback);
  }

  private addClickEvents() {
    this.element.addEventListener("click", this.mouseClickEvent);
  }

  private removeClickEvents() {
    this.element.removeEventListener("click", this.mouseClickEvent);
  }

  private mouseClickEvent = (event: MouseEvent) => {
    event.preventDefault();

    if (event.target === this.element) {
      this.notify("onClick", this.getPositionByClientX(event.clientX));
    }
  };
}
