import SliderModel from "../../../src/components/slider/Slider.model";

describe("Slider.model.spec.ts", () => {
  const model = new SliderModel({ min: 0, max: 100 });

  it("model.state is setted;", () => {
    const { min, max } = model["state"];

    expect({ min, max }).toEqual({ min: 0, max: 100 });
  });

  describe("Testing setters and getters:", () => {
    beforeEach(() => {
      model.setState({ position: 100 });
    });

    it("getState(): is working;", () => {
      const { position } = model.getState();

      expect(position).toBe(100);
    });

    it("getPosition(): is working;", () => {
      const { position } = model["state"];

      expect(position).toBe(100);
    });

    it("setPosition() more then max working;", () => {
      model.setPosition(300);

      const { position } = model["state"];

      expect(position).toBe(100);
    });

    it("setPosition() less then min working;", () => {
      model.setPosition(-100);

      const { position } = model["state"];

      expect(position).toBe(0);
    });
  });
});
