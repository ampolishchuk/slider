import EventManagerInterface from "../../eventManager/interface/EventManager.interface";

export default interface ViewInterface extends EventManagerInterface {
  render(): HTMLElement;
  setPositionLeft(position: string): void;
  setPositionRight(position: string): void;
  show(): void;
  hide(): void;
}
