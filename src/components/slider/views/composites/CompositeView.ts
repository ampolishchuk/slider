import CompositeViewInterface from "./interfaces/CompositeView.interface";
import ViewInterface from "../interfaces/View.interface";
import EventManager from "../../eventManager/EventManager";

export default class CompositeView
  extends EventManager
  implements CompositeViewInterface {
  protected views: ViewInterface[];

  constructor(views: ViewInterface[]) {
    super();

    this.views = views;
  }

  public render(): HTMLElement[] {
    return this.views.map((view) => view.render());
  }

  public show(): void {
    this.views.forEach((view) => view.show());
  }

  public hide(): void {
    this.views.forEach((view) => view.hide());
  }
}
