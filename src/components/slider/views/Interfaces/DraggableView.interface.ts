import MovableViewInterface from "./MovableView.interface";

export default interface DraggableViewInterface extends MovableViewInterface {
  onDragging(callback: Function): void;
}
