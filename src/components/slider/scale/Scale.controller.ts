import { ScaleModelInterface, ScaleViewInterface } from "./Scale.interfaces";

interface DependenciesInterface {
  model: ScaleModelInterface;
  view: ScaleViewInterface;
}

export default class ScaleController {
  private $: DependenciesInterface;

  constructor(depenencies: DependenciesInterface) {
    this.$ = depenencies;
  }

  public render() {
    const element = this.$.view.render();

    this.addEventHandlers(element);

    return element;
  }

  private addEventHandlers(element: HTMLElement) {
    element.addEventListener("click", this.mouseClickEvent);
  }

  private mouseClickEvent = (event: MouseEvent) => {
    this.$.model.setPosition(event.pageX);
  };
}
