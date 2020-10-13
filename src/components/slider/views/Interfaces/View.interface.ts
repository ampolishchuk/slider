import EventManagerInterface from "../../eventManager/Interface/EventManager.interface";

export default interface ViewInterface extends EventManagerInterface {
  render(): HTMLElement;
  show(): void;
  hide(): void;
}
