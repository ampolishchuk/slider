import ViewInterface from "../../interfaces/View.interface";
import DraggableCompositeViewInterface from "../../composites/interfaces/DraggableCompositeView.interface";
import ClickableViewInterface from "../../interfaces/ClickableView.interface";
import RangeViewInterface from "../../interfaces/RangeView.interface";

export default interface ViewFactoryInterface {
  createSlider(): ViewInterface;
  createLine(): ClickableViewInterface;
  createRangeLine(): RangeViewInterface;
  createButtons(): DraggableCompositeViewInterface;
  createScale(): ClickableViewInterface;
}
