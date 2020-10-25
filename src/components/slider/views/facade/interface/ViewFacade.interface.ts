export default interface ViewFacadeInterface {
  render(): HTMLElement;
  setPositions(positions: number[]): void;
  onAction(callback: Function): void;
  showLabels(): void;
  hideLabels(): void;
  showScale(): void;
  hideScale(): void;
}
