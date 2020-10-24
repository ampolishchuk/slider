import CompositeViewInterface from "./CompositeView.interface";

export default interface MovableCompositeViewInterface
  extends CompositeViewInterface {
  setPositions(positions: number[]): void;
  getPositions(): number[];
}
