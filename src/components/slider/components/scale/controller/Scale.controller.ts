import ScaleViewInterface from "../interfaces/ScaleView.interface";
import ScaleObserverInterface from "../interfaces/ScaleObserver.interface";

interface DependenciesInterface {
  observer: ScaleObserverInterface;
  view: ScaleViewInterface;
}

export default class ScaleController {
  private $: DependenciesInterface;

  constructor(dependencies: DependenciesInterface) {
    this.$ = dependencies;
  }

  public render(): HTMLElement {
    const element = this.$.view.render();

    this.addHandlers(element);

    return element;
  }

  private addHandlers = (element: HTMLElement): void => {
    element.addEventListener("click", (event) => {
      this.$.observer.notify("scaleController:click", event.pageX);
    });
  };
}
