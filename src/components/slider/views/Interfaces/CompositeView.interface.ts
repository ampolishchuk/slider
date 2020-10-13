import EventManagerInterface from "../../eventManager/Interface/EventManager.interface";

export default interface CompositeViewInterface extends EventManagerInterface {
  render(): HTMLElement[];
}
