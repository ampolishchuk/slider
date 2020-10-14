import EventManagerInterface from "../../eventManager/interface/EventManager.interface";

export default interface ViewInterface extends EventManagerInterface {
  render(): HTMLElement;
  addStyle(type: string, value: string): void;
  show(): void;
  hide(): void;
}
