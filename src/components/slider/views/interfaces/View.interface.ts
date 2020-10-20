import EventManagerInterface from "../../eventManager/interface/EventManager.interface";

export default interface ViewInterface extends EventManagerInterface {
  render(): HTMLElement;
  setPositionLeft(position: number): void;
  setPositionRight(position: number): void;
  show(): void;
  hide(): void;
}
