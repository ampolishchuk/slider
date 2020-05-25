export interface ButtonViewInterface {
  render(position?: number): HTMLElement;
  setPosition(position: number): void;
}

export interface ButtonControllerInterface {
  render(): HTMLElement;
  setPosition(position: number): void;
}

export interface ButtonObserverInterface {
  add(action: string, callback: Function): void;
  notify(action: string, value: any): void;
}
