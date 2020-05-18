import Model from "../../services/js/Model";

interface StateModelInterface {
  max: number;
  min: number;
  step: number;
  position: number;
  showInfo: boolean;
}

export default class SliderModel extends Model {
  protected state: StateModelInterface = {
    min: -Infinity,
    max: Infinity,
    step: 1,
    position: 0,
    showInfo: true,
  };

  constructor(state?: object) {
    super();

    this.setState(state);
  }

  public getState(): StateModelInterface {
    return this.state;
  }
  public getPosition(): number {
    return this.state.position;
  }
  public setPosition(position: number): void {
    if (position > this.state.max) position = this.state.max;
    if (position < this.state.min) position = this.state.min;

    this.setState({ position });
  }
}
