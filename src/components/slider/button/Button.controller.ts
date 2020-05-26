import {
  ButtonModelInterface,
  ButtonViewInterface,
  ButtonObserverInterface,
} from "./Button.interfaces";

interface DependenciesInterface {
  observer: ButtonObserverInterface;
  model: ButtonModelInterface;
  view: ButtonViewInterface;
}

export default class ButtonController {
  private $: DependenciesInterface;

  constructor(depenencies: DependenciesInterface) {
    this.$ = depenencies;

    this.$.observer.add("positionChanged", (position: number) => {
      this.$.view.setPosition(position);
    });
  }

  public render() {
    const element = this.$.view.render();
    const position = this.$.model.getPosition();

    this.$.view.setPosition(position);

    this.addEventHandlers(element);

    return element;
  }

  private addEventHandlers(element: HTMLElement) {
    element.addEventListener("mousedown", () => {
      document.addEventListener("mousemove", this.mouseMoveEvent);

      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", this.mouseMoveEvent);
      });
    });
  }

  private mouseMoveEvent = (event: MouseEvent) => {
    this.$.model.setPosition(event.pageX);
  };
}
