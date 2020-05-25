export interface ScaleModelInterface {
  setPosition(postion: number): void;
}

export interface ScaleViewInterface {
  render(position?: number): HTMLElement;
}

export interface ScaleControllerInterface {
  render(): HTMLElement;
}
