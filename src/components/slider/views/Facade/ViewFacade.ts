import ViewInterface from "../../interfaces/View.interface";
import ObserverInterface from "../../interfaces/Observer.interface";
import ViewFacadeInterface from "../../interfaces/ViewFacade.interface";
import DraggableViewInterface from "../../interfaces/DraggableView.interface";

export default class ViewFacade implements ViewFacadeInterface {
  private observer: ObserverInterface;
  private element: HTMLElement;
  private buttons: DraggableViewInterface[] = [];
  private scale: ViewInterface;
  private positions: number[];

  constructor(
    observer: ObserverInterface,
    element: HTMLElement,
    buttons: DraggableViewInterface[],
    scale: ViewInterface
  ) {
    this.observer = observer;
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

  private addButtonsListeners() {
    this.buttons.forEach((button, index) => {
      button.addEventListener("dragging", (position: number) => {
        this.positions[index] = position;

        this.observer.notify("view:positions", this.positions);
      });
    });
  }

  private getPositions(): number[] {
    return this.buttons.map((button) => button.getPosition());
  }
}
