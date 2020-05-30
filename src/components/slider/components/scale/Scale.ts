import ScaleControllerInterface from "./interfaces/ScaleController.interface";

import container from "../../services/IOCContainer";
import ScaleView from "./view/Scale.view";
import ScaleController from "./controller/Scale.controller";

container.set("ScaleView", ScaleView);
container.set("ScaleController", ScaleController);

export default class Scale {
  private controller: ScaleControllerInterface;

  constructor() {
    this.controller = container.get("ScaleController");
  }

  public render(): HTMLElement {
    return this.controller.render();
  }
}
