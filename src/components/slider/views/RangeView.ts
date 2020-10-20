import ClickableView from "./ClickableView";
import RangeViewInterface from "./interfaces/RangeView.interface";

export default class RangeView
  extends ClickableView
  implements RangeViewInterface {
  public setRange(positions: number[]): void {
    const start = positions[0];
    const end = 100 - positions[positions.length - 1];

    this.setPositionLeft(start);
    this.setPositionRight(end);
  }
}
