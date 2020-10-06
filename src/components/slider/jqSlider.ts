import Observer from "./observer/Observer";
import ValuesModel from "./models/ValuesModel";
import PositionsModel from "./models/PositionsModel";
import NumericScaleModel from "./models/NumericScaleModel";
import ModelFacade from "./models/Facade/ModelFacade";
import ViewFactory from "./views/Factory/ViewFactory";
import ViewFacade from "./views/Facade/ViewFacade";
import Presenter from "./presenters/Presenter";
import ObserverInterface from "./observer/Interfaces/Observer.interface";
import ModelFacadeInterface from "./models/Interfaces/ModelFacade.interface";
import ViewFacadeInterface from "./views/Interfaces/ViewFacade.interface";
import ViewInterface from "./views/Interfaces/View.interface";
import DraggableViewInterface from "./views/Interfaces/DraggableView.interface";
import PresenterInterface from "./presenters/Interfaces/Presenter.interface";

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
    const modelFacade = createModelFacade(points);
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

  function createModelFacade(scale: number[]): ModelFacadeInterface {
    const valuesModel = new ValuesModel();
    const positionsModel = new PositionsModel();
    const scaleModel = new NumericScaleModel(scale);

    return new ModelFacade(valuesModel, positionsModel, scaleModel);
  }

  function createViewFacade(
    observer: ObserverInterface,
    range: boolean
  ): ViewFacadeInterface {
    const factory = new ViewFactory(range);
    const slider = factory.createSlider();
    const line = factory.createLine();
    const buttons = factory.createButtons();
    const scale = factory.createScale();
    const element = createElement(slider, line, buttons, scale);

    return new ViewFacade(observer, element, buttons, scale);
  }

  function createElement(
    slider: ViewInterface,
    line: ViewInterface,
    buttons: DraggableViewInterface[],
    scale: ViewInterface
  ): HTMLElement {
    const element = slider.render();
    const lineRender = line.render();

    buttons.forEach((buttonRender: DraggableViewInterface) => {
      lineRender.appendChild(buttonRender.render());
    });

    element.appendChild(lineRender);
    element.appendChild(scale.render());

    return element;
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
