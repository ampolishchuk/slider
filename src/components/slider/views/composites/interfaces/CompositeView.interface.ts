import EventManagerInterface from "../../../eventManager/interface/EventManager.interface";

export default interface CompositeViewInterface extends EventManagerInterface {
  render(): HTMLElement[];
}
