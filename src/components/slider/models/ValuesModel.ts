import ValuesModelInterface from "./Interfaces/ValuesModel.interface";

export default class ValuesModel implements ValuesModelInterface {
  private listeners: Function[] = [];
  private values: any[] = [];

  public setValues(values: any[]): void {
    this.values = this.isValidValues(values) ? values : this.values;

    this.listeners.forEach((callback) => callback(this.values));
  }

  public getValues(): any[] {
    return this.values;
  }

  public onChange(callback: Function) {
    this.listeners.push(callback);
  }

  private isValidValues(values: any[]): boolean {
    if (!values || !Array.isArray(values)) {
      console.error(
        `The values to be set must be an array. Recieved: ${values} (${typeof values});`
      );

      return false;
    }

    return true;
  }
}
