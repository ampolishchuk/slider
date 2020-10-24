import MovableCompositeViewInterface from "./MovableCompositeView.interface";

export default interface DraggableCompositeViewInterface
  extends MovableCompositeViewInterface {
  onDragging(callback: Function): void;
}
