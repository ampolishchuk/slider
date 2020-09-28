import ViewFactoryInterface from "../../interfaces/ViewFactory.interface";
import ViewInterface from "../../interfaces/View.interface";
import SliderView from "../SliderView";
import ButtonView from "../ButtonView";
import ScaleView from "../ScaleView";
import LineView from "../LineView";
import MovalableViewInterface from "../../interfaces/MovalableView.interface";

export default class ViewFactory implements ViewFactoryInterface {
  private range: boolean;

  constructor(range: boolean = false) {
    this.range = range;
  }

  public createSlider(): ViewInterface {
    return new SliderView();
  }

  public createLine(): ViewInterface {
    return new LineView();
  }

  public createButton(): MovalableViewInterface {
    return new ButtonView();
  }

  public createScale(): ViewInterface {
    return new ScaleView();
  }
}
