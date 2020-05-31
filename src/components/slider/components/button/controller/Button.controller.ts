import ButtonViewInterface from "../interfaces/ButtonView.interface";
import ButtonObserverInterface from "../interfaces/ButtonObserver.interface";

interface DependenciesInterface {
  observer: ButtonObserverInterface;
  view: ButtonViewInterface;
}

export default class ButtonController {
  private $: DependenciesInterface;

  constructor(dependencies: DependenciesInterface) {
    this.$ = dependencies;

    this.$.observer.add("sliderModel:positionChanged", (position: number) => {
      this.setPosition(position);
    });
  }

  render(): HTMLElement {
    const element = this.$.view.render();

    this.addHanlders(element);

    return element;
  }

  public setPosition(position: number): void {
    this.$.view.setPosition(position);
  }

  private addHanlders(element: HTMLElement) {
    element.addEventListener("mousedown", () => {
      document.addEventListener("mousemove", this.mouseMoveHandler);

      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", this.mouseMoveHandler);
      });
    });
  }

  private mouseMoveHandler = (event: MouseEvent) => {
    this.$.observer.notify("buttonController:mousemove", event.pageX);
  };
}
