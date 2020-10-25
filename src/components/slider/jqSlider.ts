import ValuesModel from "./models/ValuesModel";
import PositionsModel from "./models/PositionsModel";
import NumericScaleModel from "./models/NumericScaleModel";
import ModelFacade from "./models/facade/ModelFacade";
import ViewFactory from "./views/factory/ViewFactory";
import ViewFacade from "./views/facade/ViewFacade";
import Presenter from "./presenters/Presenter";
import ModelFacadeInterface from "./models/facade/interface/ModelFacade.interface";
import ViewFacadeInterface from "./views/facade/interface/ViewFacade.interface";
import PresenterInterface from "./presenters/interface/Presenter.interface";

(function ($) {
  require("./css/Slider.sass");

  const defaultOptions = {
    range: false,
    scale: [0, 100],
    showScale: false,
    values: [0],
  };

  $.fn.jqSlider = function (options = {}) {
    const { scale, showScale, range, values } = $.extend(
      defaultOptions,
      options
    );
    const modelFacade = createModelFacade(scale);
    const viewFacade = createViewFacade(range, showScale);
    const presenter = createPresenter(modelFacade, viewFacade);

    presenter.renderInto(this[0]);
    presenter.setValues(values);

    return {
      setValues: (values: any[]) => {
        presenter.setValues(values);
      },
      showLabels: () => {
        presenter.showLabels();
      },
      hideLabels: () => {
        presenter.hideLabels();
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

  function createModelFacade(scale: number[]): ModelFacadeInterface {
    const valuesModel = new ValuesModel();
    const positionsModel = new PositionsModel();
    const scaleModel = new NumericScaleModel(scale);

    return new ModelFacade(valuesModel, positionsModel, scaleModel);
  }

  function createViewFacade(
    range: boolean,
    showScale: boolean
  ): ViewFacadeInterface {
    const factory = new ViewFactory(range, showScale);
    const slider = factory.createSlider();
    const labels = factory.createLabels();
    const line = factory.createLine();
    const rangeLine = factory.createRangeLine();
    const buttons = factory.createButtons();
    const scale = factory.createScale();

    return new ViewFacade(slider, labels, line, rangeLine, buttons, scale);
  }

  function createPresenter(
    modelFacade: ModelFacadeInterface,
    viewFacade: ViewFacadeInterface
  ): PresenterInterface {
    return new Presenter(modelFacade, viewFacade);
  }
})(jQuery);
