import LineViewInterface from "../interfaces/LineView.interface";
import LineObserverInterface from "../interfaces/LineObserver.interface";

interface DependenciesInterface {
  observer: LineObserverInterface;
  view: LineViewInterface;
}

export default class LineController {
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
      this.$.observer.notify("lineController:click", event.pageX);
    });
  };
}
