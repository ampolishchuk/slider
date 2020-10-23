import RangeViewInterface from "./interfaces/RangeView.interface";
import ClickableView from "./ClickableView";

export default class RangeView
  extends ClickableView
  implements RangeViewInterface {
  public setRange(positions: number[]): void {
    this.element.style.left = positions[0] + "%";
    this.element.style.right = 100 - positions[positions.length - 1] + "%";
  }
}
