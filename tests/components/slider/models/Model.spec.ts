import Model from "../../../../src/components/slider/models/Model";
import ModelInterface from "../../../../src/components/slider/interfaces/Model.interface";

describe("Testing model.ts", () => {
  let model: ModelInterface;

  beforeEach(() => {
    model = new Model([0, 100]);
  });

  it("Should set and get values", () => {
    model.setValues([100]);

    expect(model.getValues()).toEqual([100]);
  });

  it("Should set values by positions", () => {
    model.setValuesByPositions([50]);

    expect(model.getValues()).toEqual([50]);
  });

  it("Should return positions", () => {
    model.setValues([25]);

    expect(model.getPositions()).toEqual([25]);
  });
});
