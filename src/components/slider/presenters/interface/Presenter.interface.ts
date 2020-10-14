export default interface PresenterInterface {
  renderInto(container: HTMLElement): void;
  setValues(values: any): void;
  onChange(callback: Function): void;
  showScale(): void;
  hideScale(): void;
}
