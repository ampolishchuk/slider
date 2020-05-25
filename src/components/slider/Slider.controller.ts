import {
  SliderObserverInterface,
  SliderModelInterface,
  SliderViewInterface,
  SliderScaleInterface,
  SliderButtonInterface,
} from "./Slider.interfaces";

interface DependenciesInterface {
  observer: SliderObserverInterface;
  model: SliderModelInterface;
  view: SliderViewInterface;
  scale: SliderScaleInterface;
  button: SliderButtonInterface;
}

export default class SliderController {
  private $: DependenciesInterface;

  constructor(dependencies: DependenciesInterface) {
    this.$ = dependencies;

    this.$.observer.add("positionChanged", (position: number) => {
      this.$.button.setPosition(position);
    });
  }

  public render(): HTMLElement {
    const { className } = this.$.model.getState();
    const slider = this.$.view.render();
    const scale = this.$.scale.render();
    const button = this.$.button.render();

    slider.appendChild(scale);
    slider.appendChild(button);

    if (className) this.addClass(className);

    return slider;
  }

  public setPosition(position: number): void {
    this.$.model.setPosition(position);
  }

  public addClass(className: string) {
    this.$.view.addClass(className);
  }
}
