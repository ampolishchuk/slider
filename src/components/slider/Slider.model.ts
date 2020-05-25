import { SliderObserverInterface } from "./Slider.interfaces";

type StateType = {
  className: string;
  max: number;
  min: number;
  step: number;
  position: number;
  showInfo: boolean;
};

interface DependenciesInterface {
  observer: SliderObserverInterface;
}

export default class SliderModel {
  private $: DependenciesInterface;
  private state: StateType;

  constructor(dependencies: DependenciesInterface, state?: object) {
    this.$ = dependencies;

    this.state = {
      className: "",
      min: -Infinity,
      max: Infinity,
      step: 1,
      position: 0,
      showInfo: true,

      ...state,
    };
  }

  public setState(state: object): void {
    this.state = { ...this.state, ...state };
  }

  public getState() {
    return this.state;
  }

  public setPosition(position: number): void {
    this.state.position = this.validatePosition(position);

    this.$.observer.notify("positionChanged", this.state.position);
  }

  private validatePosition(position: number): number {
    if (position > this.state.max) return this.state.max;
    if (position < this.state.min) return this.state.min;

    return position;
  }
}
