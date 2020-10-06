import NumericScaleModel from "../../../../src/components/slider/models/NumericScaleModel";

describe("Testing NumericScaleModel.ts", () => {
  let model: NumericScaleModel;

  beforeEach(() => {
    model = new NumericScaleModel([-100, 100]);
  });

  it("Should return position of value", () => {
    const position = model.getPositionOfValue(0);

    expect(position).toEqual(50);
  });

  it("Should return value by position", () => {
    const value = model.getValueByPosition(0);

    expect(value).toEqual(-100);
  });
});
