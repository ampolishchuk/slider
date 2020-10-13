import ValuesModel from "./models/ValuesModel";
import PositionsModel from "./models/PositionsModel";
import NumericScaleModel from "./models/NumericScaleModel";
import ModelFacade from "./models/Facade/ModelFacade";
import ViewFactory from "./views/Factory/ViewFactory";
import ViewFacade from "./views/Facade/ViewFacade";
import Presenter from "./presenters/Presenter";
import ModelFacadeInterface from "./models/Interfaces/ModelFacade.interface";
import ViewFacadeInterface from "./views/Interfaces/ViewFacade.interface";
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
    const modelFacade = createModelFacade(points);
    const viewFacade = createViewFacade(range);
    const presenter = createPresenter(modelFacade, viewFacade);

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

  function createViewFacade(range: boolean): ViewFacadeInterface {
    const factory = new ViewFactory(range);
    const slider = factory.createSlider();
    const line = factory.createLine();
    const buttons = factory.createButtons();
    const scale = factory.createScale();

    return new ViewFacade(slider, line, buttons, scale);
  }

  function createPresenter(
    modelFacade: ModelFacadeInterface,
    viewFacade: ViewFacadeInterface
  ): PresenterInterface {
    return new Presenter(modelFacade, viewFacade);
  }
})(jQuery);
