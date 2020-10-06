export default interface ViewFacadeInterface {
  render(): HTMLElement;
  setPositions(positions: number[]): void;
  onPositionsChange(callback: Function): void;
  showScale(): void;
  hideScale(): void;
}
