import ActiveView from "./ActiveView";
import MovableViewInterface from "../interfaces/MovableView.interface";

export default class MovableView
  extends ActiveView
  implements MovableViewInterface {
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
}
