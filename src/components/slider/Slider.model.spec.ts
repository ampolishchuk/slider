import SliderModel from "./Slider.model";

describe("Testing SliderModel.ts", () => {
  const sliderModel = new SliderModel();

  it("is definable", () => {
    expect(sliderModel).toBeDefined();
  });

  describe("Test setting and getting position value to state", () => {
    it("is setting position to state", () => {
      sliderModel.setPosition(200);

      const state = sliderModel.getState();

      expect(state.position).toBe(200);
    });
    it("is getting position from state", () => {
      sliderModel.setPosition(200);

      const position = sliderModel.getPosition();

      expect(position).toBe(200);
    });
  });
  //   it("is setting click position to state", () => {
  //     const button = document.createElement("button");

  //     sliderModel.setClickPosition();
  //   });
});
