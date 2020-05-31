export default interface LineObserverInterface {
  notify(action: string, value: any): void;
}
