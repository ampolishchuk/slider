import ObserverInterface from "../interfaces/Observer.interace";

let observerSingleton: ObserverSingleton;

export default class ObserverSingleton implements ObserverInterface {
  private observersList: Array<{ action: string; callback: Function }> = [];

  constructor() {
    if (!observerSingleton) observerSingleton = this;

    return observerSingleton;
  }

  public subscribe(action: string, callback: Function): void {
    this.observersList.push({ action, callback });
  }
  public notify(action: string, value: any): void {
    this.observersList.forEach((observer) => {
      if (observer.action === action) observer.callback(value);
    });
  }
}
