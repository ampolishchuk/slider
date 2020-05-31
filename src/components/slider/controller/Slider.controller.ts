import SliderObserverInterface from "../interfaces/SliderObserver.interface";
import SliderModelInterface from "../interfaces/SliderModel.interface";
import SliderViewInterface from "../interfaces/SliderView.interface";
import SliderButtonInterface from "../interfaces/SliderButton.interface";
import SliderLineInterface from "../interfaces/SliderLine.interface";
import SliderScaleInterface from "../interfaces/SliderScale.interface";

interface DependenciesInterface {
  observer: SliderObserverInterface;
  model: SliderModelInterface;
  view: SliderViewInterface;
  button: SliderButtonInterface;
  line: SliderLineInterface;
  scale: SliderScaleInterface;
}

export default class SliderController {
  private $: DependenciesInterface;

  constructor(dependencies: DependenciesInterface) {
    this.$ = dependencies;

    this.$.observer.add(
      "buttonController:mousemove",
      (mousePosition: number) => {
        this.setPosition(mousePosition);
      }
    );

    this.$.observer.add("lineController:click", (clickPosition: number) => {
      this.setPosition(clickPosition);
    });

    this.$.observer.add("scaleController:click", (clickPosition: number) => {
      this.setPosition(clickPosition);
    });
  }

  public render(): HTMLElement {
    const container = this.$.view.render();
    const line = this.$.line.render();

    line.appendChild(this.$.button.render());
    container.appendChild(line);

    container.appendChild(this.$.scale.render());

    return container;
  }

  public setPosition(position: number) {
    this.$.model.setPosition(position);
  }
}
