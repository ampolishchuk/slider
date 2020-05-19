interface StateModelInterface {
  className?: string;
  max: number;
  min: number;
  step: number;
  position: number;
  showInfo: boolean;
}

export default class SliderModel {
  protected state: StateModelInterface = {
    min: -Infinity,
    max: Infinity,
    step: 1,
    position: 0,
    showInfo: true,
  };
  protected observersList: Array<Function> = [];

  constructor(state?: object) {
    this.setState(state);
  }

  public setState(state: object = {}): void {
    this.state = { ...this.state, ...state };
  }
  public getState(): StateModelInterface {
    return this.state;
  }

  public addObserver(callback: Function): void {
    this.observersList.push(callback);
  }
  public validatePosition(position: number): number {
    if (position > this.state.max) return this.state.max;
    if (position < this.state.min) return this.state.min;

    return position;
  }
  public setPosition(position: number): void {
    this.state.position = this.validatePosition(position);

    this.observersList.forEach((callback: Function) => callback(this.state));
  }
}
