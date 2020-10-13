export default interface ViewFacadeInterface {
  render(): HTMLElement;
  setPositions(positions: number[]): void;
  onAction(callback: Function): void;
  showScale(): void;
  hideScale(): void;
}
