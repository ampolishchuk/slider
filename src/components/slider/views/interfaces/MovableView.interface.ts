import ViewInterface from "./View.interface";

export default interface MovableViewInterface extends ViewInterface {
  setPosition(position: number): void;
  getPosition(): number;
}
