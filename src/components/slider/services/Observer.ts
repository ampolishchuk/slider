type ObserverType = {
  action: string;
  callback: Function;
};

export default class Observer {
  private list: Array<ObserverType> = [];

  public add(action: string, callback: Function): void {
    const observer = { action, callback };

    this.list.push(observer);
  }

  public notify(action: string, value: any): void {
    this.list
      .filter((observer) => observer.action == action)
      .forEach((observer) => observer.callback(value));
  }
}
