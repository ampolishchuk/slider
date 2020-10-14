import EventManagerInterface from "./interface/EventManager.interface";

export default class EventManager implements EventManagerInterface {
  private listeners: { type: string; listener: Function }[] = [];

  public subscribe(type: string, listener: Function): void {
    this.listeners.push({ type, listener });
  }

  public notify(type: string, data: any): void {
    this.listeners.forEach(({ type: listenerType, listener }) => {
      if (listenerType === type) listener(data);
    });
  }
}
