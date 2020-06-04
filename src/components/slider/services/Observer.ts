import ObserverInterface from "../interfaces/Observer.interace";

export default class Observer implements ObserverInterface {
  private observersList: Array<{ action: string; callback: Function }> = [];

  public subscribe(action: string, callback: Function): void {
    this.observersList.push({ action, callback });
  }

  public notify(action: string, value: any): void {
    this.observersList.forEach((observer) => {
      if (observer.action === action) observer.callback(value);
    });
  }
}
