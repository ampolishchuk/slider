import CompositeView from "./CompositeView";
import DraggableCompositeViewInterface from "./interfaces/DraggableCompositeView.interface";
import DraggableViewInterface from "../interfaces/DraggableView.interface";

export default class DraggableCompositeView
  extends CompositeView
  implements DraggableCompositeViewInterface {
  private positions: number[] = [];
  protected views: DraggableViewInterface[];

  constructor(views: DraggableViewInterface[]) {
    super(views);

    this.addViewListeners();
  }

  public setPositions(positions: number[]): void {
    this.views.forEach((view, index) => {
      view.setPosition(positions[index]);
    });

    this.positions = this.getPositions();
  }

  public getPositions(): number[] {
    return this.views.map((view) => view.getPosition());
  }

  public onDragging(callback: Function): void {
    this.subscribe("onDragging", callback);
  }

  private addViewListeners() {
    this.views.forEach((view, index) => {
      view.onDragging((position: number) => {
        this.positions[index] = position;
        this.notify("onDragging", this.positions);
      });
    });
  }
}
