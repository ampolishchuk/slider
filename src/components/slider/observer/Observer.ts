import ObserverInterface from "../interfaces/Observer.interface";

export default class Observer implements ObserverInterface {
  private subscribes: Array<{ [name: string]: Function }> = [];

  public subscribe(name: string, callback: Function) {
    this.subscribes.push({ [name]: callback });
  }
  public notify(name: string, value: any) {
    for (let subscribe of this.subscribes) {
      subscribe.hasOwnProperty(name) && subscribe[name](value);
    }
  }
}
