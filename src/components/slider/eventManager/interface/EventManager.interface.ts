export default interface EventManagerInterface {
  subscribe(type: string, listener: Function): void;
  notify(type: string, data: any): void;
}
