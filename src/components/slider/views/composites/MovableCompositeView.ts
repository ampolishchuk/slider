import MovableViewInterface from "../interfaces/MovableView.interface";
import MovableCompositeViewInterface from "./interfaces/MovableCompositeView.interface";
import CompositeView from "./CompositeView";

export default class MovableCompositeView
  extends CompositeView
  implements MovableCompositeViewInterface {
  protected views: MovableViewInterface[];

  setPositions(positions: number[]): void {
    this.views.forEach((view, index) => view.setPosition(positions[index]));
  }
  getPositions(): number[] {
    return this.views.map((view) => view.getPosition());
  }
}
