import { Model } from "../../services/js/Model";

interface StateInterface {
  max: number;
  min: number;
  step: number;
  position: number;
  clickPosition: number;
  showInfo: boolean;
}

export class SliderModel extends Model {
  protected state: StateInterface = {
    min: -Infinity,
    max: Infinity,
    step: 1,
    position: 0,
    clickPosition: null,
    showInfo: true,
  };

  constructor(state?: object) {
    super();

    this.setState(state);
  }
  public setPosition(position: number): void {
    if (position > this.state.max) position = this.state.max;
    if (position < this.state.min) position = this.state.min;

    this.setState({ position });
  }
  public getPosition(): number {
    return this.state.position;
  }
  public setClickPosition(event: MouseEvent): void {
    this.setState({ clickPosition: this.state.position - event.clientX });
  }
  public getDragPosition(event: MouseEvent): number {
    return this.state.clickPosition + event.clientX;
  }
}
