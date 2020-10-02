import SliderView from "../SliderView";
import ButtonView from "../ButtonView";
import ScaleView from "../ScaleView";
import LineView from "../LineView";
import ViewFactoryInterface from "../../interfaces/ViewFactory.interface";
import ViewInterface from "../../interfaces/View.interface";
import DraggableViewInterface from "../../interfaces/DraggableView.interface";

export default class ViewFactory implements ViewFactoryInterface {
  public createSlider(): ViewInterface {
    return new SliderView();
  }

  public createLine(): ViewInterface {
    return new LineView();
  }

  public createButton(): DraggableViewInterface {
    return new ButtonView();
  }

  public createScale(): ViewInterface {
    return new ScaleView();
  }
}
