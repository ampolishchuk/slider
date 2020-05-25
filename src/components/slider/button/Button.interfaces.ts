export interface ButtonViewInterface {
  render(position?: number): HTMLElement;
  setPosition(position: number): void;
}

export interface ButtonControllerInterface {
  render(): HTMLElement;
  setPosition(position: number): void;
}
