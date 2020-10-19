import View from "../View";
import ClickableView from "../ClickableView";
import DraggableView from "../DraggableView";
import ViewFactoryInterface from "./interface/ViewFactory.interface";
import ViewInterface from "../interfaces/View.interface";
import ClickableViewInterface from "../interfaces/ClickableView.interface";

import DraggableCompositeViewInterface from "../composites/interfaces/DraggableCompositeView.interface";
import DraggableCompositeView from "../composites/DraggableCompositeView";
import RangeViewInterface from "../interfaces/RangeView.interface";
import RangeView from "../RangeView";

export default class ViewFactory implements ViewFactoryInterface {
  private readonly isRange: boolean;
  private readonly showScale: boolean;

  constructor(isRange: boolean, showScale: boolean) {
    this.isRange = isRange;
    this.showScale = showScale;
  }
  public createSlider(): ViewInterface {
    return new View("section", "slider");
  }

  public createLine(): ClickableViewInterface {
    return new ClickableView("div", "slider-line");
  }

  public createRangeLine(): RangeViewInterface {
    const rangeLine = new RangeView("div", "slider-rangeLine");

    if (!this.isRange) rangeLine.hide();

    return rangeLine;
  }

  public createButtons(): DraggableCompositeViewInterface {
    const views = [];

    for (let i = this.isRange ? 2 : 1; i > 0; i--) {
      views.push(new DraggableView("button", "slider-button"));
    }

    return new DraggableCompositeView(views);
  }

  public createScale(): ClickableViewInterface {
    const scale = new ClickableView("div", "slider-scale");

    if (!this.showScale) scale.hide();

    return scale;
  }
}
