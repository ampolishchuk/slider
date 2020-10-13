import ViewInterface from "./View.interface";
import DraggableCompositeViewInterface from "./DraggableCompositeView.interface";

export default interface ViewFactoryInterface {
  createSlider(): ViewInterface;
  createLine(): ViewInterface;
  createButtons(): DraggableCompositeViewInterface;
  createScale(): ViewInterface;
}
