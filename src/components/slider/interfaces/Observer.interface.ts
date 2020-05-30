export default interface Observer {
  add(action: string, callback: Function): void;
  notify(action: string, value: any): void;
}
