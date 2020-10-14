import ValuesModelInterface from "./Interfaces/ValuesModel.interface";
import EventManager from "../eventManager/EventManager";

export default class ValuesModel
  extends EventManager
  implements ValuesModelInterface {
  private values: any[] = [];

  public setValues(values: any[]): void {
    this.values = this.isValidValues(values) ? values : this.values;

    this.notify("onChange", this.values);
  }

  public getValues(): any[] {
    return this.values;
  }

  public onChange(callback: Function) {
    this.subscribe("onChange", callback);
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
