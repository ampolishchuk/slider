import View from "../services/View";

export default class SliderView extends View {
  constructor() {
    require("../css/Slider.sass");

    super("section", "slider");
  }
}
