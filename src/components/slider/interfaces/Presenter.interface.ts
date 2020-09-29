export default interface PresenterInterface {
  render(): HTMLElement;
  setValues(values: any): void;
  onChange(callback: Function): void;
  showScale(): void;
  hideScale(): void;
}
