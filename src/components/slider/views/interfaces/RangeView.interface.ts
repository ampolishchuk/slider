import ClickableViewInterface from "./ClickableView.interface";

export default interface RangeViewInterface extends ClickableViewInterface {
  setRange(positions: number[]): void;
}
