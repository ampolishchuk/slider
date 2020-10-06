import ViewInterface from "./View.interface";
import DraggableViewInterface from "./DraggableView.interface";

export default interface ViewFactoryInterface {
  createSlider(): ViewInterface;
  createLine(): ViewInterface;
  createButtons(): DraggableViewInterface[];
  createScale(): ViewInterface;
}
