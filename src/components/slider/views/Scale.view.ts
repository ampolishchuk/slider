import ObserverInterface from "../interfaces/Observer.interace";
import ViewInterface from "../interfaces/View.interace";

interface DependenciesInterface {
  observer: ObserverInterface;
}

export default class ScaleView implements ViewInterface {
  private $: DependenciesInterface;
  private element: HTMLElement;

  constructor(dependencies: DependenciesInterface) {
    this.$ = dependencies;
  }

  render(): HTMLElement {
    this.element = document.createElement("section");
    this.element.classList.add("slider-scale");

    return this.element;
  }
}
