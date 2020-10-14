import ViewInterface from "../../interfaces/View.interface";
import DraggableCompositeViewInterface from "../../composites/interfaces/DraggableCompositeView.interface";

export default interface ViewFactoryInterface {
  createSlider(): ViewInterface;
  createLine(): ViewInterface;
  createButtons(): DraggableCompositeViewInterface;
  createScale(): ViewInterface;
}
