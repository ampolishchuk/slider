import SliderModel from "./Slider.model";

describe("Testing SliderModel.ts", () => {
  const sliderModel = new SliderModel();

  describe("Test setting and getting position value to state", () => {
    beforeEach(() => {
      sliderModel.setPosition(200);
    });

    it("is setting position to state", () => {
      const state = sliderModel.getState();

      expect(state.position).toBe(200);
    });

    it("is getting position from state", () => {
      const position = sliderModel.getPosition();

      expect(position).toBe(200);
    });
  });

  describe("Verify position after setting less then min and more then max value", () => {
    beforeAll(() => {
      sliderModel.setState({ min: 0, max: 100 });
    });

    it("Set position more then max", () => {
      sliderModel.setPosition(200);

      const state = sliderModel.getState();

      expect(state.position).toBe(100);
    });

    it("Set position less then min", () => {
      sliderModel.setPosition(-100);

      const state = sliderModel.getState();

      expect(state.position).toBe(0);
    });
  });

  describe("Test events actions", () => {
    beforeEach(() => {
      sliderModel.setState({ position: 0, clickPosition: 0 });
    });

    it("is set clickPosition to state on click event", async () => {
      const clickEvent = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
        clientX: 200,
      });

      sliderModel.setClickPosition(clickEvent);

      const state = sliderModel.getState();

      expect(state.clickPosition).toBe(200);
    });

    it("getDragPosition(): return position on mousemove event ", () => {
      const moveEvent = new MouseEvent("move", {
        bubbles: true,
        cancelable: true,
        view: window,
        clientX: 200,
      });

      const position = sliderModel.getDragPosition(moveEvent);

      expect(position).toBe(200);
    });
  });
});
