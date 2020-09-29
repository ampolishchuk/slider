import Observer from "./observer/Observer";
import ObserverInterface from "./interfaces/Observer.interface";
import ViewFacadeInterface from "./interfaces/ViewFacade.interface";
import ViewFactory from "./views/Factory/ViewFactory";
import ViewFacade from "./views/Facade/ViewFacade";
import ModelFacadeInterface from "./interfaces/ModelFacade.interface";
import Model from "./models/Model";
import ModelFacade from "./models/Facade/ModelFacade";
import Presenter from "./presenters/Presenter";
import PresenterInterface from "./interfaces/Presenter.interface";

(function ($) {
  require("./css/Slider.sass");

  const defaultOptions = {
    scale: false,
    range: false,
    points: [0, 100],
    values: [0],
  };

  $.fn.jqSlider = function (options = {}) {
    const { scale, range, points, values } = $.extend(defaultOptions, options);
    const observer = new Observer();
    const modelFacade = createModelFacade(observer, points);
    const viewFacade = createViewFacade(observer, range);
    const presenter = createPresenter(observer, modelFacade, viewFacade);

    init(presenter, this[0], values, scale);

    return {
      setValues: (values: any[]) => {
        presenter.setValues(values);
      },
      showScale: () => {
        presenter.showScale();
      },
      hideScale: () => {
        presenter.hideScale();
      },
      onChange: (callback: Function) => {
        presenter.onChange(callback);
      },
    };
  };

  function init(
    presenter: PresenterInterface,
    container: HTMLElement,
    values: any[],
    scale: boolean
  ) {
    container.innerHTML = "";
    container.appendChild(presenter.render());

    presenter.setValues(values);

    scale ? presenter.showScale() : presenter.hideScale();
  }

  function createModelFacade(
    observer: ObserverInterface,
    points: Array<number>
  ): ModelFacadeInterface {
    const model = new Model(points);

    return new ModelFacade(observer, model);
  }

  function createViewFacade(
    observer: ObserverInterface,
    range: boolean
  ): ViewFacadeInterface {
    const viewFactory = new ViewFactory();
    const slider = viewFactory.createSlider();
    const line = viewFactory.createLine();
    const buttons = [];
    const buttonsAmount = range ? 2 : 1;
    const scale = viewFactory.createScale();

    for (let i = 0; i < buttonsAmount; i++) {
      buttons.push(viewFactory.createButton());
    }

    return new ViewFacade(observer, slider, line, buttons, scale);
  }

  function createPresenter(
    observer: ObserverInterface,
    modelFacade: ModelFacadeInterface,

    viewFacade: ViewFacadeInterface
  ): PresenterInterface {
    return new Presenter({
      observer,
      modelFacade,
      viewFacade,
    });
  }
})(jQuery);
