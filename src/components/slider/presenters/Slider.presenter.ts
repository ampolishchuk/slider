import Presenter from "../services/Presenter";

export default class SliderPresenter extends Presenter {
  setValue(value: number | string): void {
    this.$.model.setValue(value);
  }
}
