import CompositeViewInterface from "./CompositeView.interface";

export default interface DraggableCompositeViewInterface
  extends CompositeViewInterface {
  onDragging(callback: Function): void;
  setPositions(positions: number[]): void;
  getPositions(): number[];
}
