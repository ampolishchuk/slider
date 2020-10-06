import ViewInterface from "../Interfaces/View.interface";
import ViewFacadeInterface from "../Interfaces/ViewFacade.interface";
import DraggableViewInterface from "../Interfaces/DraggableView.interface";

export default class ViewFacade implements ViewFacadeInterface {
  private listeners: Function[] = [];
  private element: HTMLElement;
  private buttons: DraggableViewInterface[] = [];
  private scale: ViewInterface;
  private positions: number[];

  constructor(
    element: HTMLElement,
    buttons: DraggableViewInterface[],
    scale: ViewInterface
  ) {
    this.element = element;
    this.buttons = buttons;
    this.scale = scale;
    this.positions = this.getPositions();

    this.addButtonsListeners();
  }

  public render(): HTMLElement {
    return this.element;
  }

  public setPositions(positions: number[]) {
    this.buttons.forEach((button, index) => {
      button.setPosition(positions[index]);
    });
  }

  public showScale() {
    this.scale.show();
  }

  public hideScale() {
    this.scale.hide();
  }

  public onPositionsChange(callback: Function) {
    this.listeners.push(callback);
  }

  private updatePositions(position: number, index: number) {
    this.positions[index] = position;

    this.listeners.forEach((callback) => callback(this.positions));
  }

  private addButtonsListeners() {
    this.buttons.forEach((button, index) => {
      button.addEventListener("dragging", (position: number) => {
        this.updatePositions(position, index);
      });
    });
  }

  private getPositions(): number[] {
    return this.buttons.map((button) => button.getPosition());
  }
}
