import ViewInterface from "./View.interface";

export default interface ViewFactoryInterface {
  createSlider(): ViewInterface;
  createLine(): ViewInterface;
  createButton(): ViewInterface;
  createScale(): ViewInterface;
}
