import ObserverInterface from "../interfaces/Observer.interace";
import ViewInterface from "../interfaces/View.interace";

interface DependenciesInterface {
  observer: ObserverInterface;
}

export default class ButtonView implements ViewInterface {
  private $: DependenciesInterface;
  private element: HTMLElement;

  constructor(dependencies: DependenciesInterface) {
    this.$ = dependencies;
  }

  render(): HTMLElement {
    this.element = document.createElement("button");
    this.element.classList.add("slider-button");

    return this.element;
  }
}
