import View from "../View";
import ClickableView from "../ClickableView";
import DraggableView from "../DraggableView";
import ViewFactoryInterface from "../Interfaces/ViewFactory.interface";
import ViewInterface from "../Interfaces/View.interface";
import ClickableViewInterface from "../Interfaces/ClickableView.interface";

import DraggableCompositeViewInterface from "../Interfaces/DraggableCompositeView.interface";
import DraggableCompositeView from "../Composites/DraggableCompositeView";

export default class ViewFactory implements ViewFactoryInterface {
  private readonly isRange: boolean;
  constructor(isRange: boolean = false) {
    this.isRange = isRange;
  }
  public createSlider(): ViewInterface {
    return new View("section", "slider");
  }

  public createLine(): ClickableViewInterface {
    return new ClickableView("div", "slider-line");
  }

  public createButtons(): DraggableCompositeViewInterface {
    const views = [];

    for (let i = this.isRange ? 2 : 1; i > 0; i--) {
      views.push(new DraggableView("button", "slider-button"));
    }

    return new DraggableCompositeView(views);
  }

  public createScale(): ClickableViewInterface {
    return new ClickableView("div", "slider-scale");
  }
}
