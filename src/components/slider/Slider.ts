import ViewInterface from "./interfaces/View.interace";
import ModelInterface from "./interfaces/Model.interace";
import PresenterInterface from "./interfaces/Presenter.interace";
import SliderView from "./views/Slider.view";
import ObserverInterface from "./interfaces/Observer.interace";
import Observer from "./services/Observer";
import LineView from "./views/Line.view";
import ButtonView from "./views/Button.view";
import ScaleView from "./views/Scale.view";
import Model from "./models/Model";
import SliderPresenter from "./presenters/Slider.presenter";

export default class Slider {
  private observer: ObserverInterface;
  private model: ModelInterface;
  private views: { [key: string]: ViewInterface };
  private presenters: { [key: string]: PresenterInterface };

  constructor(config?: object) {
    this.observer = new Observer();
    this.model = new Model({ observer: this.observer });

    this.views = {
      slider: new SliderView({ observer: this.observer }),
      line: new LineView({ observer: this.observer }),
      button: new ButtonView({ observer: this.observer }),
      scale: new ScaleView({ observer: this.observer }),
    };

    this.presenters = {
      slider: new SliderPresenter({
        observer: this.observer,
        model: this.model,
        view: this.views.slider,
      }),
      line: new SliderPresenter({
        observer: this.observer,
        model: this.model,
        view: this.views.line,
      }),
      button: new SliderPresenter({
        observer: this.observer,
        model: this.model,
        view: this.views.button,
      }),
      scale: new SliderPresenter({
        observer: this.observer,
        model: this.model,
        view: this.views.scale,
      }),
    };
  }

  render(): HTMLElement {
    const sliderElement = this.presenters.slider.render();
    const lineElement = this.presenters.line.render();

    lineElement.appendChild(this.presenters.button.render());
    sliderElement.appendChild(lineElement);
    sliderElement.appendChild(this.presenters.scale.render());

    return sliderElement;
  }
}
