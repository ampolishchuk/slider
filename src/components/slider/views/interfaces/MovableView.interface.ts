import ViewInterface from "./View.interface";

export default interface MovableViewInterface extends ViewInterface {
  getPosition(): number;
  setPosition(position: number): void;
}
