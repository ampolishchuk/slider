import SliderModel from "../../../src/components/slider/Slider.model";

describe("Slider.model.spec.ts", () => {
  let model: SliderModel;

  beforeAll(() => {
    model = new SliderModel({ min: 0, max: 200 });
  });

  describe("validatePosition(): Position validating:", () => {
    it("valid value passed;", () => {
      const position = model.validatePosition(100);

      expect(position).toEqual(100);
    });

    it("less then min value passed;", () => {
      const position = model.validatePosition(-100);

      expect(position).toEqual(0);
    });

    it("more then max value passed;", () => {
      const position = model.validatePosition(300);

      expect(position).toEqual(200);
    });
  });

  it("getState(): state returning", () => {
    const state = model.getState();

    expect(state).toEqual(model["state"]);
  });

  it("addObserver(): observers calling and getting values;", () => {
    let testPosition: number;

    model.addObserver(({ position }: { position: number }) => {
      testPosition = position;
    });

    model.setPosition(100);

    expect(testPosition).toBe(100);
  });
});
