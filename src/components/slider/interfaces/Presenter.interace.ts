export default interface PresenterInterface {
  render(): HTMLElement;
  setPosition(position: number): void;
  setValue?(value: number | string): void;
}
