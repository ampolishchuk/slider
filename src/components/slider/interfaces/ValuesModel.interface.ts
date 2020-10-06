export default interface ValuesModelInterface {
  setValues(values: any[]): void;
  getValues(): any[];
  onChange(callback: Function): void;
}
