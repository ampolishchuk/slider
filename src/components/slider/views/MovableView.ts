import MovableViewInterface from "./interfaces/MovableView.interface";
import View from "./View";

export default class MovableView extends View implements MovableViewInterface {
  private position: number = 0;

  public setPosition(position: number): void {
    this.position = position ?? this.position;

    this.setPositionLeft(this.position);
  }

  public getPosition(): number {
    return this.position;
  }
}
