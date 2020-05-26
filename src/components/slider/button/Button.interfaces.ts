export interface ButtonModelInterface {
  setPosition(position: number): void;
  getPosition(): number;
}

export interface ButtonViewInterface {
  render(position?: number): HTMLElement;
  setPosition(position: number): void;
}

export interface ButtonControllerInterface {
  render(): HTMLElement;
}

export interface ButtonObserverInterface {
  add(action: string, callback: Function): void;
}
