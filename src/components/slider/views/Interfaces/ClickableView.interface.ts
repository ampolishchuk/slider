import ViewInterface from "./View.interface";

export default interface ClickableViewInterface extends ViewInterface {
  onClick(callback: Function): void;
}
