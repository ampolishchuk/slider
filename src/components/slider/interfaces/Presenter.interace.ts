export default interface PresenterInterface {
  render(): HTMLElement;
  setPosition(position: number): void;
  slideTo?(value: number | string): void;
}
