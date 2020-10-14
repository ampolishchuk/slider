import ViewInterface from "../../interfaces/View.interface";
import DraggableCompositeViewInterface from "../../composites/interfaces/DraggableCompositeView.interface";
import ClickableViewInterface from "../../interfaces/ClickableView.interface";

export default interface ViewFactoryInterface {
  createSlider(): ViewInterface;
  createLine(): ClickableViewInterface;
  createRangeLine(): ClickableViewInterface;
  createButtons(): DraggableCompositeViewInterface;
  createScale(): ClickableViewInterface;
}
