import ModelInterface from "../interfaces/Model.interace";
import ObserverInterface from "../interfaces/Observer.interace";

interface DependenciesInterface {
  observer: ObserverInterface;
}

export default class Model implements ModelInterface {
  private $: DependenciesInterface;
  private position: number = 0;

  constructor(dependencies: DependenciesInterface) {
    this.$ = dependencies;
  }

  setPosition(position: number): void {
    this.position = position;
  }
}
