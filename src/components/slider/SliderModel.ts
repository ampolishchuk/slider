import { Model } from "../../services/js/Model";

export class SliderModel extends Model {
  constructor(state) {
    super();

    this.state = {
      min: -Infinity,
      max: Infinity,
      step: 1,
      position: 0,
      clickPosition: null,
      showInfo: true,
      ...state,
    };
  }
  setPosition(position) {
    if (position > this.state.max) position = this.state.max;
    if (position < this.state.min) position = this.state.min;

    this.state = { position };
  }
  getPosition() {
    return this.state.position;
  }
  setClickPosition(event) {
    this._state.clickPosition = this.state.position - event.clientX;
  }
  getDragPosition(event) {
    return this.state.clickPosition + event.clientX;
  }
}
