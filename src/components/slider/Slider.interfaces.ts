export interface SliderModelInterface {
  setState(state: object): void;
  getState(): any;
  setPosition(position: number): void;
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
  setPosition(position: number): void;
}
