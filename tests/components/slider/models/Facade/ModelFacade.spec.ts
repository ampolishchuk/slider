import ModelFacade from "../../../../../src/components/slider/models/Facade/ModelFacade";
import ValuesModel from "../../../../../src/components/slider/models/ValuesModel";
import PositionsModel from "../../../../../src/components/slider/models/PositionsModel";
import NumericScaleModel from "../../../../../src/components/slider/models/NumericScaleModel";

import ModelFacadeInterface from "../../../../../src/components/slider/interfaces/ModelFacade.interface";
import ValuesModelInterface from "../../../../../src/components/slider/interfaces/ValuesModel.interface";
import PositionsModelInterface from "../../../../../src/components/slider/interfaces/PositionsModel.interface";
import ScaleModelInterface from "../../../../../src/components/slider/interfaces/ScaleModel.interface";

describe("Testing ModelFacade.ts", () => {
  let modelFacade: ModelFacadeInterface;
  let valuesModel: ValuesModelInterface;
  let positionsModel: PositionsModelInterface;
  let scaleModel: ScaleModelInterface;

  beforeEach(() => {
    valuesModel = new ValuesModel();
    positionsModel = new PositionsModel();
    scaleModel = new NumericScaleModel([0, 100]);

    spyOn(valuesModel, "setValues").and.stub();
    spyOn(valuesModel, "getValues").and.returnValue([0]);
    spyOn(valuesModel, "onChange").and.stub();

    spyOn(positionsModel, "setPositions").and.stub();
    spyOn(positionsModel, "getPositions").and.returnValue([0]);
    spyOn(positionsModel, "onChange").and.stub();

    spyOn(scaleModel, "getValueByPosition").and.returnValue(0);
    spyOn(scaleModel, "getPositionOfValue").and.returnValue(0);

    modelFacade = new ModelFacade(valuesModel, positionsModel, scaleModel);
  });

  it("Should set values and update positions on setValues", () => {
    modelFacade.setValues([100]);

    expect(valuesModel.setValues).toHaveBeenCalled();
    expect(positionsModel.setPositions).toHaveBeenCalled();
  });

  it("Should set positions and update values on setPositions", () => {
    modelFacade.setPositions([100]);

    expect(positionsModel.setPositions).toHaveBeenCalled();
    expect(valuesModel.setValues).toHaveBeenCalled();
  });

  it("Should set callback on values change", () => {
    modelFacade.onValuesChange(() => {});

    expect(valuesModel.onChange).toHaveBeenCalled();
  });

  it("Should set callback on positions change", () => {
    modelFacade.onPositionsChange(() => {});

    expect(positionsModel.onChange).toHaveBeenCalled();
  });
});
