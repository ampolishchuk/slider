export default interface ObserverInterface {
  subscribe(name: string, callback: Function): void;
  notify(name: string, value: any): void;
}
