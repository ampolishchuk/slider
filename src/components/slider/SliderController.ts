import { SliderModel } from "./SliderModel";
import { SliderView } from "./SliderView";

export class SliderController {
  model: SliderModel;
  view: SliderView;

  constructor(state?: object) {
    this.model = new SliderModel(state);
    this.view = new SliderView();
  }
  render(): Node {
    this.view.createNode(this.model.state);

    this.addHandlers();

    return this.view.node;
  }
  slideTo(position) {
    this.model.setPosition(position);
    this.view.changeButtonPosition(this.model.getPosition());
  }
  addHandlers() {
    this.view.button.addEventListener("mousedown", (event) => {
      this.model.setClickPosition(event);

      document.addEventListener("mousemove", this.mouseMoveHandler);
    });
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", this.mouseMoveHandler);
    });
  }
  mouseMoveHandler = (event) => {
    const position = this.model.getDragPosition(event);

    this.slideTo(position);
  };
}
