import { SliderModelInterface } from "../Slider.interfaces";
import {
  ButtonViewInterface,
  ButtonObserverInterface,
} from "./Button.interfaces";

interface DependenciesInterface {
  observer: ButtonObserverInterface;
  model: SliderModelInterface;
  view: ButtonViewInterface;
}

export default class ButtonController {
  private $: DependenciesInterface;

  constructor(depenencies: DependenciesInterface) {
    this.$ = depenencies;

    this.$.observer.add("positionChanged", (position: number) => {
      this.setPosition(position);
    });
  }

  public render() {
    const { position } = this.$.model.getState();

    const element = this.$.view.render(position);

    this.addEventHandlers(element);

    return element;
  }

  public setPosition(position: number) {
    this.$.view.setPosition(position);
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
