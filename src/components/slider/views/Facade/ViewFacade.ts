import ViewInterface from "../../interfaces/View.interface";
import ObserverInterface from "../../interfaces/Observer.interface";
import ViewFacadeInterface from "../../interfaces/ViewFacade.interface";
import MovalableViewInterface from "../../interfaces/MovalableView.interface";

export default class ViewFacade implements ViewFacadeInterface {
  private observer: ObserverInterface;
  private element: HTMLElement;
  private buttons: MovalableViewInterface[] = [];
  private scale: ViewInterface;

  constructor(
    observer: ObserverInterface,
    element: HTMLElement,
    buttons: MovalableViewInterface[],
    scale: ViewInterface
  ) {
    this.observer = observer;
    this.element = element;
    this.buttons = buttons;
    this.scale = scale;

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
    this.buttons.forEach((button) => {
      button.addListener("onMove", () => {
        const positions = this.getPositions();

        this.observer.notify("view:positions", positions);
      });
    });
  }

  private getPositions(): number[] {
    return this.buttons.map((button) => button.getPosition());
  }
}
