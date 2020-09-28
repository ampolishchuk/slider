export default interface PresenterInterface {
  render(): void;
  setValues(values: any): void;
  onChange(callback: Function): void;
  showScale(): void;
  hideScale(): void;
}
