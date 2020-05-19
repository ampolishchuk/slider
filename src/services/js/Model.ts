export default class Model {
  protected state: object = {};
  protected observersList: Array<Function> = [];

  public setState(state: object): void {
    this.state = { ...this.state, ...state };

    this.observersList.forEach((callback: Function) => callback(this.state));
  }
  public getState(): any {
    return this.state;
  }
  public addObserver(callback: Function): void {
    this.observersList.push(callback);
  }
}
