import ValuesModel from "../../../../src/components/slider/models/ValuesModel";
import ValuesModelInterface from "../../../../src/components/slider/models/Interfaces/ValuesModel.interface";

describe("Testing ValuesModel.ts", () => {
  let model: ValuesModelInterface;

  beforeEach(() => {
    model = new ValuesModel();
  });

  it("Should set values", () => {
    model.setValues([100]);

    expect((model as any).values).toEqual([100]);
  });

  it("Should not change values if set not array values", () => {
    model.setValues([100]);
    model.setValues(undefined);
    model.setValues(25 as any);
    model.setValues("hello" as any);

    expect((model as any).values).toEqual([100]);
  });

  it("Should return values", () => {
    model.setValues([200]);

    expect(model.getValues()).toEqual([200]);
  });

  it("Should notify listeners on values change", () => {
    let values: any[] = [];

    model.onChange((val: any[]) => {
      values = val;
    });

    model.setValues([100]);

    expect(values).toEqual([100]);
  });
});
