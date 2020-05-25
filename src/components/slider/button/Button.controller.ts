import { SliderModelInterface } from "../Slider.interfaces";
import { ButtonViewInterface } from "./Button.interfaces";

interface DependenciesInterface {
  model: SliderModelInterface;
  view: ButtonViewInterface;
}

export default class ButtonController {
  private $: DependenciesInterface;

  constructor(depenencies: DependenciesInterface) {
    this.$ = depenencies;
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
