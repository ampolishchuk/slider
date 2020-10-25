export default interface PresenterInterface {
  renderInto(container: HTMLElement): void;
  setValues(values: any): void;
  onChange(callback: Function): void;
  showLabels(): void;
  hideLabels(): void;
  showScale(): void;
  hideScale(): void;
}
