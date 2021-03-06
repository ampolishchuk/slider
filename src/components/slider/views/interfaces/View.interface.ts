import EventManagerInterface from "../../eventManager/interface/EventManager.interface";

export default interface ViewInterface extends EventManagerInterface {
  render(): HTMLElement;
  show(): void;
  hide(): void;
}
