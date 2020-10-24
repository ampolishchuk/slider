import CompositeView from "./CompositeView";
import DraggableCompositeViewInterface from "./interfaces/DraggableCompositeView.interface";
import DraggableViewInterface from "../interfaces/DraggableView.interface";
import MovableCompositeView from "./MovableCompositeView";

export default class DraggableCompositeView
  extends MovableCompositeView
  implements DraggableCompositeViewInterface {
  protected views: DraggableViewInterface[];

  public onDragging(callback: Function): void {
    this.views.forEach((view, index) => {
      view.onDragging((position: number) => {
        const positions = this.getPositions();
        positions[index] = position;

        callback(positions);
      });
    });
  }
}
