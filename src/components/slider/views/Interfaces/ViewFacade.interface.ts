export default interface ViewFacadeInterface {
  render(): HTMLElement;
  setPositions(positions: number[]): void;
  showScale(): void;
  hideScale(): void;
}
