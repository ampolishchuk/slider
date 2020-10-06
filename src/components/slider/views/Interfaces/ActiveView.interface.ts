import ViewInterface from "./View.interface";

export default interface ActiveViewInterface extends ViewInterface {
  setPosition(position: number): void;
  getPosition(): number;
  addEventListener(type: string, callback: Function): void;
}
