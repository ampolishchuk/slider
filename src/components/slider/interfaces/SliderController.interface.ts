export default interface SliderControllerInterface {
  render(): HTMLElement;
  slideTo(position: number): void;
}
