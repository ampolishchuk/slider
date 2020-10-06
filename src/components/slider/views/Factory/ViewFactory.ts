import View from "../View";
import DraggableView from "../DraggableView";
import ViewFactoryInterface from "../Interfaces/ViewFactory.interface";
import ViewInterface from "../Interfaces/View.interface";
import DraggableViewInterface from "../Interfaces/DraggableView.interface";

export default class ViewFactory implements ViewFactoryInterface {
  private isRange: boolean;
  constructor(isRange: boolean = false) {
    this.isRange = isRange;
  }
  public createSlider(): ViewInterface {
    return new View("section", "slider");
  }

  public createLine(): ViewInterface {
    return new View("div", "slider-line");
  }

  public createButtons(): DraggableViewInterface[] {
    return Array(this.isRange ? 2 : 1)
      .fill(null)
      .reduce((buttons) => {
        const button = new DraggableView("button", "slider-button");
        buttons.push(button);
        return buttons;
      }, []);
  }

  public createScale(): ViewInterface {
    return new View("div", "slider-scale");
  }
}
