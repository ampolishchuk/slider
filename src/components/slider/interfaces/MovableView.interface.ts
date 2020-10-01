import ViewInterface from "./View.interface";

export default interface MovableViewInterface extends ViewInterface {
  setPosition(position: number): void;
  setPositionByClientX(clientX: number): void;
  getPosition(): number;
  addEventListener(type: string, callback: Function): void;
}
