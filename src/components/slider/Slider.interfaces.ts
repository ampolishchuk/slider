export interface SliderInterface extends SliderControllerIntarface {}

export interface SliderModelInterface {
  setPosition(position: number): void;
  getPosition(): number;
}

export interface SliderViewInterface {
  render(): HTMLElement;
  addClass(className: string): void;
}

export interface SliderControllerIntarface {
  render(): HTMLElement;
  setPosition(position: number): void;
  addClass(className: string): void;
}

export interface SliderObserverInterface {
  add(action: string, callback: Function): void;
  notify(action: string, value: any): void;
}

export interface SliderScaleInterface {
  render(): HTMLElement;
}

export interface SliderButtonInterface {
  render(): HTMLElement;
}
