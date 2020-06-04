export default interface ObserverInterface {
  subscribe(action: string, callback: Function): void;
  notify(action: string, value: any): void;
}
