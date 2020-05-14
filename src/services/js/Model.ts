export class Model {
  protected state: object;
  private observerList: Array<Function>;

  protected setState(state: object): void {
    this.state = { ...this.state, ...state };

    this.observerList.length &&
      this.observerList.forEach((callback: Function) => callback(this.state));
  }
  public getState(): object {
    return this.state;
  }
  public addObserver(callback: Function): void {
    this.observerList.push(callback);
  }
}
