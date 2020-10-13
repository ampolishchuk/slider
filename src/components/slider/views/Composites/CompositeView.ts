import CompositeViewInterface from "../Interfaces/CompositeView.interface";
import ViewInterface from "../Interfaces/View.interface";
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
}
