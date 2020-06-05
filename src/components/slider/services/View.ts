import ObserverInterface from "../interfaces/Observer.interace";
import ViewInterface from "../interfaces/View.interace";

interface DependenciesInterface {
  observer: ObserverInterface;
}

export default abstract class View implements ViewInterface {
  protected $: DependenciesInterface;
  protected element: HTMLElement;

  constructor(dependencies: DependenciesInterface) {
    this.$ = dependencies;
  }

  render(): HTMLElement {
    throw new Error("Method render() must be realizated");
  }
}
