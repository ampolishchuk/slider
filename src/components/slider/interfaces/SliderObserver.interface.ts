export default interface SliderObserverInterface {
  add(action: string, callback: Function): void;
  notify(action: string, value: any): void;
}
