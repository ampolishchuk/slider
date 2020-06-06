import ModelInterface from "../interfaces/Model.interace";
import ObserverInterface from "../interfaces/Observer.interace";

interface DependenciesInterface {
  observer: ObserverInterface;
}

interface StateInterface {
  position: number;
  value: number | string;
}

export default class Model implements ModelInterface {
  private $: DependenciesInterface;
  private state: StateInterface = {
    position: 0,
    value: 0,
  };

  constructor(dependencies: DependenciesInterface, state: object = {}) {
    this.$ = dependencies;
    this.setState(state);
  }

  public setPosition(position: number): void {
    this.setState({ position });
  }

  public setState(state: object): void {
    this.state = {
      ...this.state,
      ...state,
    };

    this.$.observer.notify("model:change", this.state);
  }
}
