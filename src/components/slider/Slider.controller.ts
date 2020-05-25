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
  }

  public render(): HTMLElement {
    const slider = this.$.view.render();
    const scale = this.$.scale.render();
    const button = this.$.button.render();

    slider.appendChild(scale);
    slider.appendChild(button);

    return slider;
  }

  public setPosition(position: number): void {
    this.$.model.setPosition(position);
  }

  public addClass(className: string) {
    this.$.view.addClass(className);
  }
}
