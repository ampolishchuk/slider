export default interface ViewFacadeInterface {
  render(): void;
  setPositions(positions: number[]): void;
  showScale(): void;
  hideScale(): void;
}
