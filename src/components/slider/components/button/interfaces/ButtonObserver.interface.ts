export default interface ButtonObserverInterface {
  add(action: string, callback: Function): void;
  notify(action: string, value: any): void;
}
