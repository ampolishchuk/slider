import ScaleModelInterface from "../interfaces/ScaleModel.interface";
import ScaleViewInterface from "../interfaces/ScaleView.interface";
import container from "../../../services/IOCContainer";

export default class ScaleController {
  private model: ScaleModelInterface;
  private view: ScaleViewInterface;

  constructor() {
    this.model = container.get("SliderModel");
    this.view = container.get("ScaleView");
  }

  render(): HTMLElement {
    return this.view.render();
  }
}
