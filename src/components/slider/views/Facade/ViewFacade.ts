import ViewInterface from "../../interfaces/View.interface";
import ObserverInterface from "../../interfaces/Observer.interface";
import ViewFacadeInterface from "../../interfaces/ViewFacade.interface";
import MovalableViewInterface from "../../interfaces/MovalableView.interface";

export default class ViewFacade implements ViewFacadeInterface {
  private observer: ObserverInterface;
  private slider: ViewInterface;
  private line: ViewInterface;
  private buttons: MovalableViewInterface[] = [];
  private scale: ViewInterface;

  constructor(
    observer: ObserverInterface,
    slider: ViewInterface,
    line: ViewInterface,
    buttons: MovalableViewInterface[],
    scale: ViewInterface
  ) {
    this.observer = observer;

    this.slider = slider;
    this.line = line;
    this.buttons = buttons;
    this.scale = scale;

    this.addButtonsListeners();
  }

  public render(): HTMLElement {
    const slider = this.slider.render();
    const line = this.line.render();
    const scale = this.scale.render();

    this.buttons.forEach((button) => {
      line.appendChild(button.render());
    });

    slider.appendChild(line);
    slider.appendChild(scale);

    return slider;
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
